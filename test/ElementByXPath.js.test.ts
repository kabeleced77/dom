import { expect } from 'chai'
import { JSDOM } from 'jsdom'
import 'mocha'
import { ElementByXPath } from '../dist/ElementByXPath'

describe('ElementsByXPath function test', () => {
  it('should return given XPath', () => {
    const testXpath = 'test-id'
    const sut = new ElementByXPath(testXpath)

    expect(sut.xPath()).to.equal(testXpath)
  })

  it('should return element of given XPath provided in an array', () => {
    const dom = new JSDOM(`<p id = "test-id"/p>`)
    const sut = new ElementByXPath('//*[@id="test-id"]')

    expect(sut.element(dom.window.document).length).to.equal(1)
    expect(sut.element(dom.window.document)[0].tagName).to.equal('P')
  })

  it('should return no elements as XPath does not match any element', () => {
    const dom = new JSDOM(`<p id = "test-id"/p>`)
    const sut = new ElementByXPath('//*[@id="test-id-1"]')

    expect(sut.element(dom.window.document).length).to.equal(0)
  })
})
