const expect = require('chai').expect
const jsdom = require('jsdom')
const { JSDOM } = jsdom
const ElementById = require('../dist/ElementById').ElementById

describe('ElementById function test', () => {
  let dom
  before(function() {
    dom = new JSDOM(`<p id = "test-id"/p>`)
  })

  it('should return given id', () => {
    const testId = 'test-id'

    const sut = new ElementById(testId)

    expect(sut.id()).to.equal(testId)
  })

  it('should return the element matching given id in an array', () => {
    const testId = 'test-id'

    const sut = new ElementById(testId)

    expect(sut.element(dom.window.document).length).to.equal(1)
    expect(sut.element(dom.window.document)[0].tagName).to.equal('P')
  })

  it('should return no element as id does not match any element', () => {
    const dom = new JSDOM(`<p id = "test-id"/p>`)

    const sut = new ElementById('test-id-1')

    expect(sut.element(dom.window.document).length).to.equal(0)
  })
})
