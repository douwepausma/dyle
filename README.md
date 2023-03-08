# dyle
dyle is a tailwind plugin that adds components and base styles.

## Installation
`npm install @douwepausma/dyle`

`yarn add @douwepausma/dyle`

And in your *tailwind.config.js* add dyle to your plugins:
```
plugins: [
  require('@douwepausma/dyle')
],
```

## Documentation
*This is not an extensive documentation, but just a few examples of the classes included.*

The components like buttons & badges are all generated based on the theme's configured colors.

### Buttons
```
// A standard green button
<a class="btn btn-green">Button</a>

// A button with a green border
<a class="btn btn-outline-green">Button</a>

// A button with a green border and an icon as it's contents
<a class="btn btn-outline-green btn-icon">
  <svg>your-icon</svg>
</a>
```

### Badges
```
// A standard green badge
<span class="badge badge-green">Badge</span>

// A badge with a green border
<span class="badge badge-outline-green">Badge</span>
```

### Alerts
```
// A standard green alert
<span class="alert alert-green">Badge</span>
```

### Input fields
Most input types are supported, changing the type will automatically change it's styling.
```
// Text input field 
<div class="input-group">
  <label for="example-text-input">Text input field</label>
  <input id="example-text-input" type="text" class="input-field" placeholder="Input field">
</div>
```
```
// Select input field
<div class="input-group">
  <label for="example-select-input">Select input field</label>
  <select class="input-field" name="example-select-input" id="example-select-input">
    <option value="">Option 1</option>
    <option value="">Option 2</option>
    <option value="">Option 3</option>
  </select>
</div>
```
```
// File input field
<div class="input-group">
  <label for="example-file-input">File input field</label>
  <input id="example-file-input" type="file" class="input-field file:btn file:btn-outline-green">
</div>
```
```
// Textarea field
<div class="input-group">
  <label for="example-textarea-input">Textarea input field</label>
  <textarea class="input-field" id="example-textarea-input"></textarea>
</div>
```
```
<div class="input-group">
  <label for="example-checkbox-1">
    <input class="input-field" type="checkbox" name="example-checkbox" id="example-checkbox-1">
    Checkbox Label 1
  </label>
  <label for="example-checkbox-2">
    <input class="input-field" type="checkbox" name="example-checkbox" id="example-checkbox-2">
    Checkbox Label 2
  </label>
  <label for="example-checkbox-3">
    <input class="input-field" type="checkbox" name="example-checkbox" id="example-checkbox-3">
    Checkbox Label 3
  </label>
</div>
```
