export const pricingPlans = [
    {
        id: 1,
        name: 'Starter',
        price: 0,
        description: 'Perfect for beginners and small creators.',

        features:[
            'Connect up to 2 social platforms.',
            'Basic sentiment analysis.',
            'Weekly analytics reports.',
            '100 comments per day.',
            'Email support.',
        ],
        link: '/',
        mostPopular: false,
        option: 'Start for Free',
    },

    {
        id: 2,
        name: 'Pro',
        price: 29,
        duration: '/Month',
        description:'For growing creators who need more insights.',

        features:[
            'Connect up to 5 social platforms.',
            'Advanced sentiment analysis.',
            'Daily analytics reports.',
            '1,000 comments per day.',
            'Comment keyword tracking.',
            'Content recommendations.',
            'Priority email support.',
        ],
        link: '/',
        mostPopular: true,
        option: 'Start 14-Day Free Trial',

    },
    {
        id: 3,
        name: 'Enterprise',
        price: 99,
        duration: '/Month',
        description: 'For established creators and teams.',

        features:[
            'Unlimited social platforms.',
            'Real-time sentiment analysis.',
            'Custom analytics dashb oard.',
            'Unlimited comments.',
            'Advanced keyword tracking.',
            'AI-powered content strategy.',
            'Team collaboration tools.',
            'Dedicated account manager.',
            '24/7 priority support.',
        ],
        link: '/',
        mostPopular: false,
        option: 'Contact Sales'
    },
];