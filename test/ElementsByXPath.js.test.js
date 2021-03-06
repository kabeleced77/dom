const expect = require('chai').expect
const jsdom = require('jsdom')
const { JSDOM } = jsdom
const ElementsByXPath = require('../dist/index.js').ElementsByXPath

describe('ElementsByXPath function test - JavaScript', () => {
  it('should return given XPath', () => {
    const testXpath = 'test-id'
    const sut = new ElementsByXPath(testXpath)

    expect(sut.xPath()).to.equal(testXpath)
  })

  it('should return a list of elements matching given XPath', () => {
    const dom = new JSDOM(`
    <div class="outer" name="div-01">
      <div class="inner" name="div-01-01">
        <div class="inner" name="div-01-01-01">
          <p /p>
        /<div>
      /<div>
      <div class="inner" name="div-01-02">
        <p /p>
      /<div>
    <div name="div-01">
    `)
    const sut = new ElementsByXPath('//*[@class="inner"]')

    expect(sut.elements(dom.window.document).length).to.equal(3)
    expect(sut.elements(dom.window.document)[0].tagName).to.equal('DIV')
    expect(sut.elements(dom.window.document)[0].className).to.equal('inner')
    expect(sut.elements(dom.window.document)[0].getAttribute('name')).to.equal(
      'div-01-01',
    )
    expect(sut.elements(dom.window.document)[1].tagName).to.equal('DIV')
    expect(sut.elements(dom.window.document)[1].className).to.equal('inner')
    expect(sut.elements(dom.window.document)[1].getAttribute('name')).to.equal(
      'div-01-01-01',
    )
    expect(sut.elements(dom.window.document)[2].tagName).to.equal('DIV')
    expect(sut.elements(dom.window.document)[2].className).to.equal('inner')
    expect(sut.elements(dom.window.document)[2].getAttribute('name')).to.equal(
      'div-01-02',
    )
  })

  it('should return no elements as XPath does not match any element', () => {
    const dom = new JSDOM(`<p id = "test-id"/p>`)
    const sut = new ElementsByXPath('//*[@id="test-id-1"]')

    expect(sut.elements(dom.window.document).length).to.equal(0)
  })
})
