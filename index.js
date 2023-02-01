module.exports = ({ addComponents, addBase, theme, e }) => {
    const colors = theme('colors');
    let buttons = [];
    let badges = [];
    let alerts = [];

    let borderRadiusBase = '14px';

    /* Button base styles */
    buttons.push({
        ['.btn']: {
            display: 'inline-flex',
            alignItems: 'center',
            textAlign: 'center',
            borderRadius: borderRadiusBase,
            fontWeight: '600',
            transitionProperty: 'color, background-color, border-color',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDuration: '150ms',
            lineHeight: '1.5',
            paddingTop: '6px',
            paddingRight: '18px',
            paddingBottom: '6px',
            paddingLeft: '18px',
            border: '1px solid',
            borderColor: 'transparent',
            cursor: 'pointer',
            '&:hover': {
                textDecoration: 'none',
            }
        },
    })

    /* Button colors styles */
    buttons.push(Object.entries(colors).map(([key, value]) => {
        return {
            [`.btn-${key}`]: {
                color: value[900],
                backgroundColor: value[200],
                borderColor: value[300],

                '&:hover': {
                    backgroundColor: value[300],
                    borderColor: value[400],
                },
            },
        }
    }))

    /* Button outline styles */
    buttons.push(Object.entries(colors).map(([key, value]) => {
        return {
            [`.btn-outline-${key}`]: {
                backgroundColor: 'transparent',
                borderColor: value[200],
                color: value[900],

                '&:hover': {
                    backgroundColor: value[100],
                },
                'path': {
                    fill: value[900],
                }
            }
        }
    }))

    /* Button icon styles */
    buttons.push({
        ['.btn-icon']: {
            padding: '8px',
        }
    })

    addComponents(buttons);

    /* Badge base styles */
    badges.push({
        ['.badge']: {
            display: 'inline-flex',
            lineHeight: '1.4',
            alignItems: 'center',
            textAlign: 'center',
            borderRadius: theme('borderRadius.full'),
            fontWeight: '600',
            transitionProperty: 'color, background-color, border-color',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDuration: '150ms',
            paddingRight: theme('spacing.2'),
            paddingLeft: theme('spacing.2'),
            border: '1px solid transparent',
            '&:hover': {
                textDecoration: 'none',
            }
        }
    })

    /* Badge colors styles */
    badges.push(Object.entries(colors).map(([key, value]) => {
        return {
            [`.badge-${key}`]: {
                color: value[900],
                backgroundColor: value[200],
                borderColor: value[300],
            },
            /* Add hover styles when badge is <a> */
            [`a.badge-${key}`]: {
                '&:hover': {
                    backgroundColor: value[300],
                    borderColor: value[400],
                    cursor: 'pointer',
                },
            },
        }
    }))

    /* Badge outline colors styles */
    badges.push(Object.entries(colors).map(([key, value]) => {
        return {
            [`.badge-outline-${key}`]: {
                borderColor: value[200],
                color: value[900],
            },
            /* Add hover styles when badge is <a> */
            [`a.badge-outline-${key}`]: {
                '&:hover': {
                    backgroundColor: value[100],
                    cursor: 'pointer',
                },
            },
        }
    }))

    addComponents(badges);

    /* Badge base styles */
    alerts.push({
        ['.alert']: {
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            borderRadius: theme('borderRadius.full'),
            fontWeight: '600',
            textDecorationLine: 'none',
            transitionProperty: 'color, background-color, border-color',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDuration: '150ms',
            paddingTop: theme('spacing.2'),
            paddingRight: theme('spacing.4'),
            paddingBottom: theme('spacing.2'),
            paddingLeft: theme('spacing.4'),
            border: '1px solid transparent',
        }
    })

    /* Badge colors styles */
    alerts.push(Object.entries(colors).map(([key, value]) => {
        return {
            [`.alert-${key}`]: {
                color: value[900],
                backgroundColor: value[300],
            },
        }
    }))

    addComponents(alerts);

    /* Input styles */
    addComponents({
        '.input-group': {
            display: 'flex',
            flexDirection: 'column',
            marginBottom: theme('spacing.4'),

            'label': {
                display: 'flex',
                alignItems: 'center',
                fontWeight: '600',
            },
        },
        '.input-field[type="radio"], .input-field[type="checkbox"]': {
            marginRight: theme('spacing.2')
        },
        '.input-field[type="file"]': {
            padding: '16px',
            borderWidth: '1px',
            borderColor: colors.slate[300],
            borderRadius: '18px',
            borderStyle: 'dashed',
            marginTop: '2px',
        },
        '.input-field[type="text"], .input-field[type="password"], .input-field[type="email"], .input-field[type="tel"], .input-field[type="number"], select.input-field, textarea.input-field': {
            width: '100%',
            borderWidth: '1px',
            borderColor: colors.slate[300],
            borderRadius: borderRadiusBase,
            backgroundColor: 'transparent',
            paddingTop: '6px',
            paddingRight: '14px',
            paddingBottom: '6px',
            paddingLeft: '14px',
            marginTop: '2px',

            '&:focus-visible': {
                borderColor: colors.primary[500],
                outline: 'solid ' + colors.primary[300],
            },
            '&::placeholder': {
                color: colors.slate[500],
            },
        },
        'select.input-field': {
            paddingRight: '30px',
            webkitAppearance: 'none',
            mozAppearance: 'none',
            appearance: 'none',
            backgroundImage: 'url(\'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"%3E%3Cpath fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"/%3E%3C/svg%3E%0A\')',
            backgroundSize: '18px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'calc(100% - 0.75rem) center',
        }
    })

    /* Alert base styles */
    alerts.push({
        ['.alert']: {
            display: 'flex',
            alignItems: 'center',
            borderRadius: borderRadiusBase,
            fontWeight: '600',
            textDecorationLine: 'none',
            transitionProperty: 'color, background-color, border-color',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDuration: '150ms',
            paddingTop: theme('spacing.2'),
            paddingRight: theme('spacing.3'),
            paddingBottom: theme('spacing.2'),
            paddingLeft: theme('spacing.3'),
            border: '1px solid transparent',
        }
    })

    /* Alert colors styles */
    alerts.push(Object.entries(colors).map(([key, value]) => {
        return {
            [`.alert-${key}`]: {
                color: value[900],
                backgroundColor: value[200],
            },
        }
    }))

    addComponents(alerts);

    /* Pre, Code styles */
    addBase({
        'pre': {
            borderRadius: borderRadiusBase,
            fontSize: '0.875rem',
            color: colors.white,
            borderColor: colors.gray[900],
            borderWidth: '1px',
            backgroundColor: colors.gray[700],
            paddingTop: '10px',
            paddingRight: theme('spacing.6'),
            paddingBottom: '10px',
            paddingLeft: theme('spacing.6'),
        },
        'code': {
            backgroundColor: colors.primary[100],
            color: colors.primary[900],
            paddingRight: theme('spacing.1'),
            paddingLeft: theme('spacing.1'),
            borderRadius: '4px'
        }
    })
}
