# BootstrapStrength.js

jQuery plugin to calculate string or password strength with Bootstrap progress bar full customizable.
Thanks to https://github.com/aarondo project that inspire a Bootstrap dedicated plugin.

## Documentation

BootstrapStrength.js provides a string strength indicator to show how secure a users password or a string is.

## Demo
For a demo visit http://rivalex.github.io/bootstrap-strength.js/

The string strength indicator is marked on 5 scores. These are

*   String must contain 8 characters or more
*   String must contain 1 lowercase letter
*   String must contain 1 uppercase letter
*   String must contain 1 number
*   String must contain 1 special character such as `[!,%,&,@,#,$,^,*,?,_,~]`

The script works on input fileds an on **Bootstrap input group** fields as well.

## Getting Started

### Include the relevant files

Firstly include **jQuery**, **Bootstrap** and **bootstrap-strength.js** files. Place these before `<head>` section or in footer as well.

```html
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet">

<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>

<script type="text/javascript" src="bootstrap-strength.js"></script>
<script type="text/javascript" src="myScript.js"></script>
```

### Create a password or text input field

All fields **must have a unique ID**.

```html
<input id="myPassword" type="password" name="" value="">
```

### Initiate the plugin

Once you have created your input field you will need to initiate the plugin.
At its most basic level you can initiate the plugin like:

```javascript
$(document).ready(function ($) {
	$("#myPassword").bootstrapStrength();
});
```

If you want to initiate the plugin with options then you can do so like:
```javascript
$('#myPassword').bootstrapStrength({
	stripped: true,
	active: true,
	slimBar: true,
	minLenght: 8,
	upperCase: 1,
	upperReg: "[A-Z]",
	lowerCase: 1,
	lowerReg: "[a-z]",
	numbers: 1,
	numberReg: "[0-9]",
	specialchars: 1,
	specialReg: "[!,%,&,@,#,$,^,*,?,_,~]",
	topMargin: "5px;",
	meterClasses: {
		weak: "progress-bar-danger",
		medium: "progress-bar-warning",
		good: "progress-bar-success"
	}
});
```

## Options

<table>
	<thead>
		<tr>
			<th>Variable</th>
			<th>Default Value</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>stripped</td>
			<td>true</td>
			<td>Use the stripped progress bar from Bootstrap css</td>
		</tr>
		<tr>
			<td>active</td>
			<td>true</td>
			<td>Animate the stripped progress bar if enabled</td>
		</tr>
		<tr>
			<td>slimBar</td>
			<td>true</td>
			<td>Reduce the standard Bootstrap progress bar to a 7px height</td>
		</tr>
		<tr>
			<td>minLenght</td>
			<td>8</td>
			<td>Define the <b>minumum length</b> of the string</td>
		</tr>
		<tr>
			<td>upperCase</td>
			<td>1</td>
			<td>Define <b>how many Upper case letter/s</b> are required. Any positive integer is accepted</td>
		</tr>
		<tr>
			<td>upperReg</td>
			<td>`[A-Z]`</td>
			<td>A <b>RegEx</b> containing the Capitol definition for matching. It can be customized to mach specific character groups.</td>
		</tr>
		<tr>
			<td>lowerCase</td>
			<td>1</td>
			<td>Define <b>how many Lower case letter/s</b> are required. Any positive integer is accepted</td>
		</tr>
		<tr>
			<td>lowerReg</td>
			<td>`[a-z]`</td>
			<td>A <b>RegEx</b> containing the Lower Case definition for matching. It can be customized to mach specific character groups.</td>
		</tr>
		<tr>
			<td>numbers</td>
			<td>1</td>
			<td>Define <b>how many Number/s</b> are required. Any positive integer is accepted</td>
		</tr>
		<tr>
			<td>numberReg</td>
			<td>[0-9]</td>
			<td>A <b>RegEx</b> containing the Numbers definition for matching. It can be customized to mach specific character groups.</td>
		</tr>
		<tr>
			<td>specialchars</td>
			<td>1</td>
			<td>Define <b>how many Special Character/s</b> are required. Any positive integer is accepted</td>
		</tr>
		<tr>
			<td>specialReg</td>
			<td>[!,%,&,@,#,$,^,*,?,_,~]</td>
			<td>A <b>RegEx</b> containing the Special Character definition for matching. It can be customized to mach specific character groups.</td>
		</tr>
		<tr>
			<td>topMargin</td>
			<td>5px</td>
			<td>Define the margin between input and progress bar.</td>
		</tr>
		<tr>
			<td>meterClasses</td>
			<td></td>
			<td>Contain an array for css progress bar classes</td>
		</tr>
		<tr>
			<td>meterClasses.weak</td>
			<td>progress-bar-danger</td>
			<td>Style use under 50% of string strength</td>
		</tr>
		<tr>
			<td>meterClasses.weak</td>
			<td>progress-bar-warning</td>
			<td>Style use between 50% and 80% of string strength</td>
		</tr>
		<tr>
			<td>meterClasses.weak</td>
			<td>progress-bar-success</td>
			<td>Style use for 100% of string strength</td>
		</tr>
	</tbody>
</table>
