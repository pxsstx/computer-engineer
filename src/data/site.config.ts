interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'Sr. Supachai', // Site author
	title: 'Computer Engineer', // Site title.
	description: 'Computer Engineering covers both fundamental and specialized courses such as programming, digital circuits, operating systems, and computer networks. The program emphasizes both theoretical and practical learning to prepare students for careers in the technology industry.', // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
