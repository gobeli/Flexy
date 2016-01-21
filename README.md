#Flexy

##A Flexbox-based 12 column grid-system

Get startet by including the _flexy.scss in you project and initialize it i.e:
```Sass
@include initialize(("xs": "0","s": "480px","m": "768px","l": "980px"),true); //breaks / enable prefixing
```

###Default usage
Include the default grid like this:
```Sass
.row {
    @include defaultGrid();
}
```
If your just using the default grid you could also use the compiled version located in the dist folder which is nothing more than the defaultGrid.

###Use the different mixins

The first mixin you will use is the following:
```Sass
.row{
	@include row(true/false,[same as align-items],[same as justify-content]); //true: inline-flex, false: flex | default: false
}
```
Next up we have some of mixins for the row. Checkout [css-tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) for reference

```Sass
@include align-items(flex-start | flex-end | center | baseline | stretch );
@include justify-content(flex-start | flex-end | center | space-between | space-around );
@include flex-direction(row | row-reverse | column | column-reverse);
@include flex-wrap(nowrap | wrap | wrap-reverse);
```

Next up we have the mixin to make a column:
```Sass
nav{
	@include col(m,4);
}
section{
	@include col(m,8); /* m = the break-identifier, 8 = width (12 = 100%, 8 = 66,66%) */
}
```

For the gutter use the third parameter
```Sass
section{
	@include col(m,6,.5rem); /* .5rem = the gutter (default = null) */
}
```

If you want to throw some offset in there use a fourth parameter for the col-mixin
```Sass
section{
	@include col(m,6,null,3); /* 3 = the offset (3 = 25%) */
}
```

Use the `flex`-mixin to specify your own flex and not be tied to the 12 cols. Again [css-tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) for reference
```Sass
aside{
	@include flex(0 1 20rem);
}

You may want to use the cool order functionality that flexbox provides, in this little mixin library you can use ths with the order mixin:
```Sass
header{
	@include order(1); /* 1 = the order */	
}
```

With the following mixin you can control the `align-self`-property of the column.
```Sass
@include align-self(auto | flex-start | flex-end | center | baseline | stretch);
```

You can also use the ```break```-mixin everywhere:
```Sass
@include break(m){
	padding: .5rem;
}
```
This mixin requires a break-name as a parameter.

There is also a little prefix mixin, if you use a autoprefixer you won't need this so you can switch it off by setting the variable `$prefix` to `false`.

Also check out the demo to so cool stuff you can build with Flexy