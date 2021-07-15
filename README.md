<h1 style="text-align: center;">  🆁🅽🅻🅾🅶</h1>

### motivation
rnlog was motivated to facilitate logging via terminal without going into debug mode for two reasons

1. the debug mode is heavier and more costly for the machine, joining with the debug tools, it gets even heavier
2. when we're using a physical device, debugging is easier or when we're using a release (that's why I use emotions)

### Install

```js
npm install rnlog
```

or
```js
yarn add rnlog
```

### 1. Usage

```js
import log from 'rnlog'

...

log.info('test log info')

log.success('test log success')

log.warning('test log warning')

log.error('test log error')

log.json({
  name: "ayrton",
  lastname: "lacerda"
})
```

and the result would be this on the console

![log](https://res.cloudinary.com/levifraldas/image/upload/v1626354070/Screen_Shot_2021-07-15_at_10.00.09_brkhqw.png)

#### 1.1 Conditional

if you want the log to only appear in a specific scenario, the second parameter is a boolean conditional (not required), thus avoiding a series of IFs


```js
import log from 'rnlog'

...
const anyvar = 'yes'

log.info('test log info compare no', anyvar === 'no')

log.info('test log info compare yes', anyvar === 'yes')

```

![](https://res.cloudinary.com/levifraldas/image/upload/v1626354354/Screen_Shot_2021-07-15_at_10.05.38_megomr.png)

#### 1.2 backgroundcolor json

for json logs it is possible to change the background color to suit different terminals

```js
import log from 'rnlog'

...

log.json({
  name: "ayrton",
  lastname: "lacerda"
}, 'blue')

```

![](https://res.cloudinary.com/levifraldas/image/upload/v1626354505/Screen_Shot_2021-07-15_at_10.08.15_msgxok.png)


| key color      | 
| ----------- | 
| black      | 
| red   |
| green   | 
| yellow   | 
| blue   | 
| magenta   | 
| cyan   | 
| white   | 
| crimson   | 