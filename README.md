# Task description

A marketplace app with 2 tabs. In the first tab, the user can see
the categories, when the user clicks on that category, a list of
products in will be shown. Each product has a “buy” button.
When that button is clicked, a map will be shown to the user for
them to select the delivery coordinates. When the user submits
the location, the app will redirect them to a second tab. The
second tab is the active orders of that same user. It will check
every 5 seconds for the status of the order (e.g. pending, inprocess, delivery, and delivered) and every 30 seconds the app
will change the status of order automatically.

## Project structure
- redux is used as the state management tool utilizing `redux-toolkit`
- data models are in types directory which are
  - Category
  - Product
  - Order
- screens and their own components are together in screen directory so the related modules are closer together
- navigation in the app is implemented by `react-navigation` and all the implementations are available in navigation directory. it includes AppNavigator as the root element and TabNavigator witch contains `homeStack` and `ordersScreen`
- to achieve map integration the *mapbox* is used same as the company.

## Data generator
There's a `MockRepositoryBuilder` which creates a fake data repository to handle the 30 seconds order's status updates

