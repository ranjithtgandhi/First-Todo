

module.exports.Start=function(req,res) {
    res.render('Home');
};
module.exports.template=function(req,res){
    switch(req.params.optionTemplate){
        case 'dashboard':
            res.render('./Template/dashboard.html');
            break;
        case 'project':
            res.render('./Template/Project.html');
            break;
        case 'users':
            res.render('./Template/users.html');
            break;
		case 'tasks':
            res.render('./Template/tasks.html');
            break;	
    };
};
