import { Module, Component } from '../../../Synergy/src/index';
import styles from './styles.jss';

const defaults = {
    'options' : {
        'columns': 12,
        'gutter': '3%',
        'col-break': '940px',
    },
    'settings' : {
        'responsive': true,
        'custom-stacking': true,
        'adaptive-columns': true,
        'flow-columns': true,
        'magic-columns': true,
        'block-columns': true,
        'no-gutter-columns': true,
        'reverse-columns': true,
        'pull-columns': true,
        'push-columns': true
    },
    'breakpoints' : {
        'break-0': '0px',
        'break-1': '460px',
        'break-2': '720px',
        'break-3': '940px',
        'break-4': '1200px'
    },
    'fractions' : {
        'full': [1, 1],
        'half': [1, 2],
        'third': [1, 3],
        'quarter': [1, 4],
        'sixth': [1, 6]
    }
}

const PAX5 = ({ name, columns, ...props }) => {
    return (
        <PAX5.row name={name} styles={node => Module.setStyles(node, styles)} {...props}>
            {columns.map((column, index) => (
                <PAX5.column name='column' key={index}>{column}</PAX5.column>
            ))}
        </PAX5.row>
    );
}

PAX5.defaultProps = {
    name: 'PAX5',
    mechanism: 'flex'
}

PAX5.row = ({ name ='PAX5', ...props }) => {
    //
    const columnTypes = [
        'block',
        'default',
        'flow',
        'magic',
        'no-gutter'
    ];

    return (
        <Module name={name} styles={node => Module.setStyles(node, styles)} {...props}>
            {props.children}
        </Module>
    );
};

PAX5.column = ({ name = 'column', width, ...props }) => {

    const span = width ? `span-${width}` : 'span';

    return (
        <Component modifiers={[span]} name={name} {...props}>
            {props.children}
        </Component>
    )
};

export default PAX5;