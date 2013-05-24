# SlideThis

> A jQuery plugin for displaying images as a slideshow.

## About
The design aim is to be as small as possible providing the most basic
functionality.

## Usage
To use this plugin jQuery needs to be included, either via an online resource
such as Google or locally. Next include the jQuery plugin file, and optionally
the CSS file.

```html
<script src='http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js'></script>
<script src='js/jquery.slidethis.js'></script>
<link href='css/slidethis.css' rel='stylesheet' />
```

In your markup create a div with the ID slideshow containing an unordered list
of images.

```html
<div id="slideshow">
  <ul>
    <li><img src="image1.png" /></li>
    <li><img src="image2.png" /></li>
    <li><img src="image3.png" /></li>
  </ul>
</div>
```

Finally call `.slidethis()` on the slideshow div.  Remember to either put the
call inside a `$(document).ready()` block or at the end of your markup or the
plugin will not run!

```javascript
$(document).ready(function() {
    $("#slideshow").slidethis();
});
```

### Options

- ```auto``` - automatically animate slides (type: ```boolean```, default: ```true```)
- ```pager``` - show a pager for selecting slide (type: ```boolean```, default: ```true```)
- ```speed``` - speed (in ms) of transition (type: ```integer```, default: ```500```)
- ```timeout``` - time (in ms) between transitions (type: ```integer```, default: ```5000```)
- ```width``` - width (in px) of the slideshow (type: ```integer```, default: ```600```)
- ```height``` - height (in px) of the slideshow (type: ```integer```, default: ```300```)

## Author
**Liam Keene**
[Twitter](https://twitter.com/liam_keene) |
[Github](https://github.com/LiamKeene) | [Website](http://liamkeene.com)


## License
> Copyright (c) 2013 Liam Keene (liam.keene@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
