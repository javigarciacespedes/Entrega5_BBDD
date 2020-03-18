const {User, Score} = require("./model.js").models;

exports.score_list = async (rl) => {
    let lista = await Score.findAll({
      include: [{model: User, as: 'user'}],
      order:[ ['wins', 'DESC'] ]
    });
    lista.forEach(function(score,fecha) {rl.log(score['user']['name'] + "|" + score['wins'] + "|" + fecha.toUTCString()); })
  }



