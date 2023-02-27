const addProductToCartHookUrls = { 
    "localhost": 'https://hook.integromat.com/s84e90qdvi6olhsux7i3ombmkhyh39cv', 
    "sandbox-us.boostgaming.com": 'https://hook.integromat.com/s84e90qdvi6olhsux7i3ombmkhyh39cv', 
    "sandbox-uk.boostgaming.com": 'https://hook.integromat.com/s84e90qdvi6olhsux7i3ombmkhyh39cv', 
    "sandbox-de.boostgaming.com": 'https://hook.integromat.com/s84e90qdvi6olhsux7i3ombmkhyh39cv', 
    "sandbox-au.boostgaming.com": 'https://hook.integromat.com/s84e90qdvi6olhsux7i3ombmkhyh39cv', 
    "sandbox-nl.boostgaming.com": 'https://hook.integromat.com/s84e90qdvi6olhsux7i3ombmkhyh39cv', 
    "sandbox-be-nl.boostgaming.com": 'https://hook.integromat.com/s84e90qdvi6olhsux7i3ombmkhyh39cv', 
    "us.boostgaming.com": 'https://hook.integromat.com/88k1jxpi8fr456whd7i3dcqap2fm9enh',
    "gb.boostgaming.com": 'https://hook.integromat.com/88k1jxpi8fr456whd7i3dcqap2fm9enh',
    "de.boostgaming.com": 'https://hook.integromat.com/88k1jxpi8fr456whd7i3dcqap2fm9enh',
    "au.boostgaming.com": 'https://hook.integromat.com/88k1jxpi8fr456whd7i3dcqap2fm9enh',
    "nl.boostgaming.com": 'https://hook.integromat.com/88k1jxpi8fr456whd7i3dcqap2fm9enh',
    "be.boostgaming.com": 'https://hook.integromat.com/88k1jxpi8fr456whd7i3dcqap2fm9enh'
}; 

const domainCartLimitsHookUrls = { 
    "localhost": 'https://hook.integromat.com/dddp5xxei52uqpmg2nem3kxpsbygzwbd', 
    "sandbox-us.boostgaming.com": 'https://hook.integromat.com/dddp5xxei52uqpmg2nem3kxpsbygzwbd', 
    "sandbox-uk.boostgaming.com": 'https://hook.integromat.com/dddp5xxei52uqpmg2nem3kxpsbygzwbd', 
    "sandbox-de.boostgaming.com": 'https://hook.integromat.com/dddp5xxei52uqpmg2nem3kxpsbygzwbd',
    "sandbox-au.boostgaming.com": 'https://hook.integromat.com/dddp5xxei52uqpmg2nem3kxpsbygzwbd',
    "sandbox-nl.boostgaming.com": 'https://hook.integromat.com/dddp5xxei52uqpmg2nem3kxpsbygzwbd',
    "sandbox-be-nl.boostgaming.com": 'https://hook.integromat.com/dddp5xxei52uqpmg2nem3kxpsbygzwbd',
    "us.boostgaming.com": 'https://hook.integromat.com/2hco7g1er67vallbbg7se65ao54zns1o',
    "gb.boostgaming.com": 'https://hook.integromat.com/2hco7g1er67vallbbg7se65ao54zns1o',
    "de.boostgaming.com": 'https://hook.integromat.com/2hco7g1er67vallbbg7se65ao54zns1o',
    "au.boostgaming.com": 'https://hook.integromat.com/2hco7g1er67vallbbg7se65ao54zns1o',
    "nl.boostgaming.com": 'https://hook.integromat.com/2hco7g1er67vallbbg7se65ao54zns1o',
    "be.boostgaming.com": 'https://hook.integromat.com/2hco7g1er67vallbbg7se65ao54zns1o'
};

const hookUrlHelper = {


    /**
     * Returns the correct add product to cart hook url for the domain
     * @param domain
     * @returns {url}
     */
    getAddProductToCartHookUrl(domain) {
        if (addProductToCartHookUrls.hasOwnProperty(domain)) {
            return (addProductToCartHookUrls[domain]);
        }else {
            return "#";
        }

    },

    /**
     * Returns the correct domain limits hook url for the domain
     * @param domain
     * @returns {{url}}
     *
     */
    getDomainLimitsHookUrl(domain) {
        if (domainCartLimitsHookUrls.hasOwnProperty(domain)) {
            return (domainCartLimitsHookUrls[domain]); 
        }else {
            return "#";
        }
    },
};

export default hookUrlHelper;



