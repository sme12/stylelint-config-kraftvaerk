module.exports = {
    extends: [
        'stylelint-config-standard'
    ],
    plugins: [
        'stylelint-order'
    ],
    rules: Object.assign({},
        {
            'color-named': 'never',

            'font-family-name-quotes': 'always-where-required',

            'function-url-quotes': 'always',

            'indentation': 4,
            'max-empty-lines': 1,
            'max-nesting-depth': 3,
            'no-duplicate-selectors': true,
            'no-unknown-animations': true,

            'number-leading-zero': 'never',

            'selector-class-pattern': [/^(.)?([a-z0-9](-[a-z0-9])?)+(__([a-z0-9].?)+)?(--([a-z0-9].?)+)?$/, { resolveNestedSelectors: true }],
            'selector-list-comma-newline-before': 'never-multi-line',
            'selector-list-comma-space-after': 'always-single-line',
            'selector-pseudo-class-no-unknown': true,
            'selector-pseudo-element-no-unknown': true,
            'selector-type-no-unknown': true,
            'selector-max-id': 0,

            'string-quotes': 'single',

            'value-keyword-case': 'lower',
            'value-no-vendor-prefix': true,

            'shorthand-property-no-redundant-values': null,

            'order/properties-order': [
                'content',
                'display',
                'position',
                'top',
                'right',
                'bottom',
                'left',
                'float',

                'flex',
                'flex-basis',
                'flex-direction',
                'flex-flow',
                'flex-grow',
                'flex-shrink',
                'flex-wrap',
                'align-content',
                'align-items',
                'align-self',
                'justify-content',
                'order',

                'width',
                'min-width',
                'max-width',

                'height',
                'min-height',
                'max-height',

                'margin',
                'margin-top',
                'margin-right',
                'margin-bottom',
                'margin-left',

                'padding',
                'padding-top',
                'padding-right',
                'padding-bottom',
                'padding-left',

                'columns',
                'column-gap',
                'column-fill',
                'column-rule',
                'column-span',
                'column-count',
                'column-width',

                'border',
                'border-top',
                'border-right',
                'border-bottom',
                'border-left',
                'border-width',
                'border-top-width',
                'border-right-width',
                'border-bottom-width',
                'border-left-width',

                'border-style',
                'border-top-style',
                'border-right-style',
                'border-bottom-style',
                'border-left-style',

                'border-radius',
                'border-top-left-radius',
                'border-top-right-radius',
                'border-bottom-left-radius',
                'border-bottom-right-radius',

                'border-color',
                'border-top-color',
                'border-right-color',
                'border-bottom-color',
                'border-left-color',

                'outline',
                'outline-color',
                'outline-offset',
                'outline-style',
                'outline-width',

                'background',
                'background-clip',
                'background-color',
                'background-image',
                'background-repeat',
                'background-position',
                'background-size',
                'background-origin',

                'color',

                'font',
                'font-family',
                'font-size',
                'font-smoothing',
                'font-style',
                'font-variant',
                'font-weight',

                'letter-spacing',
                'line-height',
                'list-style',

                'text-align',
                'text-decoration',
                'text-indent',
                'text-overflow',
                'text-rendering',
                'text-shadow',
                'text-transform',
                'text-wrap',

                'white-space',
                'word-spacing',

                'border-collapse',
                'border-spacing',
                'box-shadow',
                'caption-side',
                'cursor',
                'empty-cells',
                'opacity',
                'overflow',
                'quotes',
                'speak',
                'table-layout',
                'vertical-align',
                'visibility',
                'z-index',
                'transform',
                'transition',
                'clear'
            ]
        }
    )
};
