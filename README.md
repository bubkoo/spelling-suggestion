<h1 align="center">Spelling Suggestion</h1>

<p align="center"><strong>Given a name and a list of names that are not equal to the name, return a spelling suggestion if there is one that is close enough.</strong></p>

<p align="center">
<a href="/LICENSE"><img src="https://img.shields.io/github/license/bubkoo/spelling-suggestion?style=flat-square" alt="MIT License"></a>
<a href="https://www.typescriptlang.org"><img alt="Language" src="https://img.shields.io/badge/language-TypeScript-blue.svg?style=flat-square"></a>
<a href="https://github.com/bubkoo/spelling-suggestion/pulls"><img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-Welcome-brightgreen.svg?style=flat-square"></a>
<a href="https://github.com/bubkoo/spelling-suggestion/actions/workflows/ci.yml"><img alt="build" src="https://img.shields.io/github/workflow/status/bubkoo/spelling-suggestion/%F0%9F%91%B7%E3%80%80CI/master?logo=github&style=flat-square"></a>
<a href="https://app.codecov.io/gh/bubkoo/spelling-suggestion"><img alt="coverage" src="https://img.shields.io/codecov/c/gh/bubkoo/spelling-suggestion?logo=codecov&style=flat-square&token=BWweeU2uNX"></a>
<a href="https://lgtm.com/projects/g/bubkoo/spelling-suggestion/context:javascript" rel="nofollow"><img alt="Language grade: JavaScript" src="https://img.shields.io/lgtm/grade/javascript/g/bubkoo/spelling-suggestion.svg?logo=lgtm&style=flat-square" /></a>
</p>

## Install

```shell
npm install --save spelling-suggestion
```

## Usage
Names less than length 3 only check for case-insensitive equality, not Levenshtein distance.

- If there is a candidate that's the same except for case, return that.
- If there is a candidate that's within one edit of the name, return that.
- Otherwise, return the candidate with the smallest Levenshtein distance, except for candidates: 
  - With no name 
  - Whose length differs from the target name by more than 0.34 of the length of the name. 
  - Whose levenshtein distance is more than 0.4 of the length of the name (0.4 allows 1 substitution/transposition for every 5 characters, and 1 insertion/deletion at 3 characters)


```js
import { getSpellingSuggestion } from 'spelling-suggestion';

// return the best matched item
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
)
// => { name: 'food' }

// return the best matched string
getSpellingSuggestion('foo', ['fo', 'foo', 'book', 'cook', 'food'])
// => food

// return the best matched string with case-insensitive equality
getSpellingSuggestion('foo', ['fo', 'Foo', 'book', 'cook', 'food'])
// => Foo

// return undefined when no match found
getSpellingSuggestion('fo', ['fo', 'foo', 'book', 'cook', 'food'])
// => undefined

// return the first best match
getSpellingSuggestion('foo', ['fo', 'foo', 'food', 'fooo', 'fook'])
// => food
getSpellingSuggestion('foo', ['fo', 'foo', 'fook', 'food', 'fooo'])
// => fook
getSpellingSuggestion('foo', ['fo', 'foo', 'fooo', 'fook', 'food']),
// => fooo
```


## Contributing

Please let us know how can we help. Do check out [issues](https://github.com/bubkoo/spelling-suggestion/issues) for bug reports or suggestions first.

To become a contributor, please follow our [contributing guide](/CONTRIBUTING.md).

<a href="https://github.com/bubkoo/spelling-suggestion/graphs/contributors">
  <img src="/CONTRIBUTORS.svg" alt="Contributors" width="740" />
</a>


## License

The scripts and documentation in this project are released under the [MIT License](LICENSE)
