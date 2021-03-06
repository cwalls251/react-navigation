/*
 * @noflow - get/set properties not yet supported by flow. also `...require(x)` is broken #6560135
 */

module.exports = {

  // Core
  get createNavigationContainer() { return require('./createNavigationContainer').default; },
  get StateUtils() { return require('./StateUtils').default; },
  get PropTypes() { return require('./PropTypes').default; },
  get addNavigationHelpers() { return require('./addNavigationHelpers').default; },

  // Navigators
  get createNavigator() { return require('./navigators/createNavigator').default; },

  // Routers
  get StackRouter() { return require('./routers/StackRouter').default; },
  get TabRouter() { return require('./routers/TabRouter').default; },

};
