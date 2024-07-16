/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 - present Instructure, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { ComponentClass } from 'react'

import { findDOMNode } from '@instructure/ui-dom-utils'

// TODO: Components that render as non-native Portals have a DOMNode property.
//  (Portal, DrawerTray, Modal, Overlay, Tray). Make this a common interface that all of them implements.
interface ComponentWithDOMNode {
  DOMNode?: HTMLSpanElement | null
}

let shouldNotAppendLocators = true

try {
  shouldNotAppendLocators = !process?.env?.ALWAYS_APPEND_UI_TESTABLE_LOCATORS
} catch (e) {
  if (e instanceof ReferenceError) {
    // if process is not available a ReferenceError is thrown
    shouldNotAppendLocators = false
  } else {
    throw e
  }
}

type CSSSelector = `[data-cid~="${string}"]`

// uses the wrapped function to have fever changes (needs @testable(), not @  testable)TODO remove
function testable() {
  return <C extends ComponentClass<any>>(
    targetCls: C,
    _ctx?: ClassDecoratorContext
  ): C & { selector?: CSSSelector } => {
    if (
      process.env.NODE_ENV === 'production' &&
      // If you would like to the `data-cid` attributes on elements even in your
      // production builds (like if you are using them in your e2e builds or
      // something), you need to set the environment variable
      // ALWAYS_APPEND_UI_TESTABLE_LOCATORS=1
      // We do this because adding those `data-cid` locators slows things down.
      shouldNotAppendLocators
    ) {
      return targetCls
    }
    const displayName = targetCls.displayName || targetCls.name
    const locator = {
      attribute: 'data-cid',
      value: displayName
    }
    const selector = `[${locator.attribute}~="${locator.value}"]`
    // @ts-ignore https://stackoverflow.com/questions/51567462/typescript-class-extends-a-generic-type
    class TestableComponent<P, S> extends targetCls {
      // @ts-ignore it always has this type
      static selector: CSSSelector = selector
      #testableUnmounted: boolean | undefined
      #locatorTimeout: ReturnType<typeof setTimeout> | undefined
      componentDidMount() {
        this.#testableUnmounted = false
        if (super.componentDidMount) {
          super.componentDidMount()
        }
        this.appendLocatorAttribute()
      }
      componentDidUpdate?(
        prevProps: Readonly<P>,
        prevState: Readonly<S>,
        snapshot?: any
      ) {
        if (super.componentDidUpdate) {
          super.componentDidUpdate(prevProps, prevState, snapshot)
        }
        this.appendLocatorAttribute()
      }
      componentWillUnmount() {
        this.#testableUnmounted = true
        if (super.componentWillUnmount) {
          super.componentWillUnmount()
        }
        if (this.#locatorTimeout) {
          clearTimeout(this.#locatorTimeout)
        }
      }
      appendLocatorAttribute() {
        this.#locatorTimeout = setTimeout(() => {
          let node: Element | undefined = undefined
          if (this.#testableUnmounted) {
            return
          }
          try {
            // Use this.DOMNode for components that render as non-native Portals...
            node =
              (this as ComponentWithDOMNode).DOMNode ||
              (findDOMNode(this) as Element)
          } catch (e) {
            console.warn(
              `[ui-testable] Could not append locator attribute: ${e}`
            )
          }
          if (node) {
            const attribute = node.getAttribute(locator.attribute)
            const values =
              typeof attribute === 'string' ? attribute.split(/\s+/) : []
            if (!values.includes(locator.value)) {
              values.push(locator.value)
            }
            node.setAttribute(locator.attribute, values.join(' '))
          }
        })
      }
    }
    return TestableComponent
  }
}

export default testable
export { testable }
