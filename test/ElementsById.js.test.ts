import { expect } from 'chai'
import { JSDOM } from 'jsdom'
import 'mocha'
import { ElementById } from '../dist/ElementById'

describe('ElementById function test', () => {
  it('should return given id', () => {
    const testId = 'test-id'

    const sut = new ElementById(testId)

    expect(sut.id()).to.equal(testId)
  })

  it('should return the element matching given id in an array', () => {
    const testId = 'test-id'
    const dom = new JSDOM(`<p id = "${testId}"/p>`)

    const sut = new ElementById(testId)

    expect(sut.element(dom.window.document).length).to.equal(1)
    expect(sut.element(dom.window.document)[0].tagName).to.equal('P')
  })

  it('should return no elements as id does not match any element', () => {
    const dom = new JSDOM(`<p id = "test-id"/p>`)

    const sut = new ElementById('test-id-1')

    expect(sut.element(dom.window.document).length).to.equal(0)
  })
})
