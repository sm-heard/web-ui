# mi-location-info

The `<mi-location-info>` element can be used to display a locations External Id, Floor Name, Building, and Venue information.

Working example:

<mi-location-info></mi-location-info>
<script>
const locationInfoComponent = document.querySelector('mi-location-info');
const mockLocation = {
    properties: {
        externalId: "012345",
        floorName: "1",
        building: "The White House",
        venue: "The White House"
    }
}
locationInfoComponent.location = mockLocation;
</script>

Example usage:

```html
<!-- HTML -->

<mi-location-info></mi-location-info>
```

```js
// JavaScript

const locationInfoComponent = document.querySelector('mi-location-info');
const mockLocation = {
    properties: {
        externalId: "012345",
        floorName: "1",
        building: "The White House",
        venue: "The White House"
    }
}
locationInfoComponent.location = mockLocation;
```

## `location` attribute

A `location` attribute is available on the `<mi-location-info>` element which should be used to pass a MapsIndoors `Location`. When the `Building` and `Venue` names is alike only the name of the `Venue` is displayed. The attribute is required.

<!-- markdownlint-disable -->
<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type  | Default     |
| ---------- | ---------- | ----------- | ----- | ----------- |
| `location` | `location` |             | `any` | `undefined` |


----------------------------------------------


