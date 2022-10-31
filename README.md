![TESTS](https://github.com/alexisxz/my-create-app/actions/workflows/node.js.yml/badge.svg)
# todo-list-with-typescript

## Reminders
 - map: return all values
 - filtro: return a value by condition
 - find: find a value and return a condition or a new value

## setps
 - ask all actions will be required by the app and create the actions in appReducer
 - create the context of all functions required by the app in the appContext
 - pass the reducer to the app
 - pass the context to the app and create the Provider value in a const returning a memo

## Presentation

### reducer
 - Global/Centralized state management
 - Similar to redux, but with less boilerplate

### Context /use Context
- To avoid prop drilling
- I could memoize the functions to avoid rerender

## Unit test
- Vitest/Jest
- The goal is to test the smallest part of a code (a unit)
-- Test in isolation
- We can do TDD (Test Driven Development)
- Why is importnat:
-- When working with multiple people, and large codebase, to prevent someone else to break the code by mistake. 
- possibilities of expect
-- toBe('') - expect a value
-- toBeDefined() - if the value exist or not
--- expect(list[0]).toBeDefined()
--- expect(list.find((elem) => elem.id === elemId)).toBeDefined()
-- toHaveLenght(1) - to expect an amount of index
-- not.toBe() - to not expect a value (could be used for any another expect possibilities)

```typescript
describe("" , () => {
    describe("", () => {
        it("should test something", () => {
            // Arrange

            // Act
            result = ...

            // Assert
            expect(result).toBe()
        })
    })
})
```


## CI (Continuos Integration)
- Github Actions
  - Nodejs and configure
- Automatic test on the cloud
- Ensure quality of code# ats-system
