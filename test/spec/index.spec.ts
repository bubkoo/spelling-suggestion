import { getSpellingSuggestion } from '../../src/index'

describe('getSpellingSuggestion', () => {
  it('should return the best matched item', () => {
    expect(
      getSpellingSuggestion(
        'foo',
        [
          { name: 'fo' },
          { name: 'foo' },
          { name: 'book' },
          { name: 'cook' },
          { name: 'food' },
        ],
        (candidate) => candidate.name,
      ),
    ).toEqual({ name: 'food' })
  })

  it('should return the best matched string', () => {
    expect(
      getSpellingSuggestion('foo', ['fo', 'foo', 'book', 'cook', 'food']),
    ).toEqual('food')
  })

  it('should return the best matched string with case-insensitive equality', () => {
    expect(
      getSpellingSuggestion('foo', ['fo', 'Foo', 'book', 'cook', 'food']),
    ).toEqual('Foo')
  })

  it('should return the undefined when no match found', () => {
    expect(
      getSpellingSuggestion('fo', ['fo', 'foo', 'book', 'cook', 'food']),
    ).toBeUndefined()
  })

  it('should return the first best match', () => {
    expect(
      getSpellingSuggestion('foo', ['fo', 'foo', 'food', 'fooo', 'fook']),
    ).toEqual('food')

    expect(
      getSpellingSuggestion('foo', ['fo', 'foo', 'fook', 'food', 'fooo']),
    ).toEqual('fook')

    expect(
      getSpellingSuggestion('foo', ['fo', 'foo', 'fooo', 'fook', 'food']),
    ).toEqual('fooo')
  })

  it('s', () => {
    expect(
      getSpellingSuggestion('fook', ['fo', 'foook', 'fook', 'food', 'fooo']),
    ).toEqual('foook')
  })
})
