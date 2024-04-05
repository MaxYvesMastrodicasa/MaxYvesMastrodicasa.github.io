export const get500 = (req, res, next) => {
    res.render('500', { 
        pageTitle: 'Database Unreachable', 
        path: '/'});
};

export default get500; 