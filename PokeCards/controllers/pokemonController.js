const {Poke, Element} = require('../models');

module.exports.viewAll = async function(req, res, next) {
    const pokes = await Poke.findAll();
    res.render('index', {pokes});
}

module.exports.renderEditForm = async function(req, res, next) {
    const elements = await Element.findAll();
    const poke = await Poke.findByPk(
        req.params.id
    );

    res.render('edit', {poke, elements});
}

module.exports.updatePokemon = async function(req, res, next) {
    await Poke.update(
        {
            name: req.body.name,
            colorone: req.body.colorone,
            colortwo: req.body.colortwo,
            hp: req.body.hp,
            element: req.body.element,
            picture: req.body.picture,
            elementcostone: req.body.elementcostone,
            elementcosttwo: req.body.elementcosttwo,
            movenameone: req.body.movenameone,
            movenametwo: req.body.movenametwo,
            dmgone: req.body.dmgone,
            dmgtwo: req.body.dmgtwo,
            elementw: req.body.elementw,
            elementr: req.body.elementr,
        },
            {
                where: {
                    id: req.params.id
                }

    });
    res.redirect('/');
}

module.exports.deletePokemon = async function(req, res, next) {
    await Poke.destroy(
        {
            where: {
                id: req.params.id
            }

    });
    res.redirect('/');
}

module.exports.renderAddForm = async function(req, res, next) {
    const elements = await Element.findAll();
    const poke = {
        name: '',
        colorone: '',
        colortwo: '',
        hp: '',
        element: '',
        picture: '',
        elementcostone: 1,
        elementcosttwo: 2,
        movenameone: '',
        movenametwo: '',
        dmgone: '',
        dmgtwo: '',
        elementw: '',
        elementr: ''
    }
    res.render('add', {poke, elements});
}

module.exports.addPoke = async function(req, res, next) {
    await Poke.create(
        {
            colorone: req.body.colorone,
            colortwo: req.body.colortwo,
            name: req.body.name,
            hp: req.body.hp,
            element: req.body.element,
            picture: req.body.picture,
            elementcostone: req.body.elementcostone,
            elementcosttwo: req.body.elementcosttwo,
            movenameone: req.body.movenameone,
            movenametwo: req.body.movenametwo,
            dmgone: req.body.dmgone,
            dmgtwo: req.body.dmgtwo,
            elementw: req.body.elementw,
            elementr: req.body.elementr,
        });
    res.redirect('/');
}

