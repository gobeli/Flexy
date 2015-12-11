#Flexy

##A Flexbox-based 12 column grid-system

###Media queries

| Small (s)        | Medium (m)       | Large (l)        |
| ---------------- |:----------------:| -----------------|
| max-width: 480px | max-width: 768px | max-width: 980px |

###Use

####Columns
```html
<div class="row">
	<div class="s4 padding demo">s4</div>
	<div class="s4 padding demo">s4</div>
	<div class="s4 padding demo">s4</div>
</div>
<div class="row">
	<div class="m4 padding offset-m8 demo">m4 offset-m8</div>
</div>
```

####Column Order
```html
<div class="row">
	<div class="m3 order-2 padding demo">1 (order-2)</div>
	<div class="m3 order-3 padding demo">2 (order-3)</div>
	<div class="m3 order-4 padding demo">3 (order-4)</div>
	<div class="m3 order-1 padding demo">4 (order-1)</div>
</div>
```

####Row options
```html
<div class="row h-space-between">
	<div class="xs4 padding demo">.row.h-space-between</div>
	<div class="xs4 padding demo">.row.h-space-between</div>
</div>
```