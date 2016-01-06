#Flexy

##A Flexbox-based 12 column grid-system

###Use

Get startet by including the _flexy.scss in you project and set your breakpoints i.e:

```Sass
@include set-breakpoints(("xs": "0","s": "480px","m": "768px","l": "980px"));
```

####Default usage
Include the default grid like this:
```Sass
@include defaultGrid();
```
If your just using the default grid you could also use the compiled version located in the dist folder which is nothing more than the defaultGrid.

####Use the different mixins
