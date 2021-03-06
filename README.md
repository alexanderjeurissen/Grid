![image](public/assets/logo.png)

![Publish](https://github.com/alexanderjeurissen/grid/workflows/Publish/badge.svg)

> The Grid. A digital frontier. I tried to picture clusters of information as they moved through the computer. What did they look like? Ships, motorcycles? Were the circuits like freeways? I kept dreaming of a world I thought I'd never see. And then, one day I got in...

A declarative React primitive Grid component that exposes css-grid specification in JSX

Based on Styled System and Styled Components. Written in typescript to provide strict prop validation on css spec adherence.

## Usage

Import as follows:

`import Grid from 'react-grid-primitive';`

Then use the grid to define the desired css grid layout:

e.g. for a 200px height header, with a left sidebar that is 100px in width and a main content that takes up the remainder

```
<Grid gridTemplateRows='200px 1fr' gridTemplateColumns='100px 1fr'>
 <Header />
 <Sidebar />
 <Content />
</Grid>
```

## Additional resources

- https://www.w3.org/TR/css-grid-1/
- https://css-tricks.com/snippets/css/complete-guide-grid/
