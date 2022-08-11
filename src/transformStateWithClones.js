'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const newState = Object.assign({}, state);
  const versions = [];

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(newState, action.extraData);
        break;

      case 'removeProperties':
        for (const key of action.keysToRemove) {
          if (newState.hasOwnProperty(key)) {
            delete newState[key];
          }
        }
        break;

      case 'clear':
        for (const key in newState) {
          delete newState[key];
        }
        break;

      default:
        return 'hello world!!)';
    }

    versions.push({ ...newState });
  }

  return versions;
}

module.exports = transformStateWithClones;
