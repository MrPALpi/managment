<template>
  <fieldset class="form__fieldset">
            <legend>{{ legend }}</legend>
            <slot>

            </slot>
        </fieldset>
</template>

<script>
export default {
    name:'field-set',
    props:{
        legend:''
    }
}
</script>

<style>
.form__fieldset {
    width: 100%;
    padding: 5px 10px 8px;
    color: var(--tracing);
    border: 1px solid var(--tracing);
    border-radius: 5px;
    font-size: 18px;
}
.form__fieldset legend{
    color:var(--tracing);
}
</style>