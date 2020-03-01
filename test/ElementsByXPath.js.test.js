const expect = require('chai').expect
const jsdom = require('jsdom')
const { JSDOM } = jsdom
const ElementsByXpath = require('../dist/ElementByXPath').ElementByXPath

describe('ElementsByXPath function test', () => {
  it('should return given XPath', () => {
    const testXpath = 'test-id'
    const sut = new ElementsByXpath(testXpath)

    expect(sut.xPath()).to.equal(testXpath)
  })

  it('should return element of given XPath provided in an array', () => {
    const dom = new JSDOM(`<p id = "test-id"/p>`)
    // global.window = dom.window
    const sut = new ElementsByXpath('//*[@id="test-id"]')

    expect(sut.element(dom.window.document).length).to.equal(1)
    expect(sut.element(dom.window.document)[0].tagName).to.equal('P')
  })

  it('should return no element as XPath does not match any element', () => {
    const dom = new JSDOM(`<p id = "test-id"/p>`)
    // global.window = dom.window
    const sut = new ElementsByXpath('//*[@id="test-id-1"]')

    expect(sut.element(dom.window.document).length).to.equal(0)
  })
})
