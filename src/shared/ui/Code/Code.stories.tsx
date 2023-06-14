import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Code } from './Code';

export default {
	title: 'shared/Code',
	component: Code,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Normal = Template.bind({});
Normal.args = {
	text: 'let arr =[1, -2, -3, 4, 5, -6];\n'
		+ 'let result = arr.reduce(function (sum, elem) {\n'
		+ '	if (elem >= 0) {\n'
		+ '	    return sum + elem;\n'
		+ '	} else {\n'
		+ '	    return sum;\n'
		+ '	}\n'
		+ '});\n',
};

export const Dark = Template.bind({});
Dark.args = {
	text: 'let arr =[1, -2, -3, 4, 5, -6];\n'
		+ 'let result = arr.reduce(function (sum, elem) {\n'
		+ '	if (elem >= 0) {\n'
		+ '	    return sum + elem;\n'
		+ '	} else {\n'
		+ '	    return sum;\n'
		+ '	}\n'
		+ '});\n',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];