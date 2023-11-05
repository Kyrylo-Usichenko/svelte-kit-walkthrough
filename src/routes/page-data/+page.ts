export const prerender = true;

const fetchResult = [
	{
		title: 'First article',
		content: 'First article content'
	},
	{
		title: 'Second article',
		content: 'Second article content'
	}
];

export function load() {
	const articles = fetchResult;
	console.log('Loging that is shown at server and cliend side:', articles);

	return { articles };
}
