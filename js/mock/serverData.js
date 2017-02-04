;
(function(window, $) {

    "use strict";

    $.mockjax({
        url: "mock_url",
        data: {
            action: 'get_knowledge_tree',
        },
        status: 200,
        responseTime: 100,

        responseText: {
            'status': true,
            'error': '',
            'data': {"graph":[{"nodes":[{"category":0,"id":"1","name":"国际贸易","link_id":[0,1,2],"children":[],"value":1},{"category":0,"id":"2","name":"世界贸易","link_id":[3,4,5],"children":[],"value":1},{"category":0,"id":"3","name":"过境贸易","link_id":[6,7,8,9],"children":[],"value":1},{"category":0,"id":"4","name":"转口贸易","link_id":[10,11,12,13],"children":[],"value":1},{"category":0,"id":"5","name":"保护贸易","link_id":[14,15,16],"children":[],"value":1},{"category":0,"id":"6","name":"自由贸易","link_id":[17,18,19,20],"children":[],"value":1},{"category":0,"id":"7","name":"非关税壁垒","link_id":[21,22,23],"children":[],"value":1},{"category":0,"id":"8","name":"进口替代","link_id":[24,25],"children":[],"value":1},{"category":0,"id":"9","name":"出口替代","link_id":[26,27],"children":[],"value":1},{"category":0,"id":"10","name":"货物贸易","link_id":[28,29,30],"children":[],"value":1},{"category":0,"id":"11","name":"关税","link_id":[31,32,33],"children":[],"value":1},{"category":0,"id":"12","name":"海关","link_id":[34,35,36,37],"children":[],"value":1},{"category":0,"id":"13","name":"海关税则","link_id":[38,39,40],"children":[],"value":1},{"category":0,"id":"14","name":"保护关税","link_id":[41,42,43,44,45],"children":[],"value":1},{"category":0,"id":"15","name":"出口税","link_id":[46,47,48],"children":[],"value":1},{"category":0,"id":"16","name":"进口税","link_id":[49,50,51,52],"children":[],"value":1},{"category":0,"id":"17","name":"关税配额","link_id":[53,54],"children":[],"value":1},{"category":0,"id":"18","name":"外汇管制","link_id":[55,56,57],"children":[],"value":1},{"category":0,"id":"19","name":"出口加工区","link_id":[58,59],"children":[],"value":1},{"category":0,"id":"20","name":"保税区","link_id":[60,61],"children":[],"value":1},{"category":0,"id":"21","name":"纺织品","link_id":[62,63,64,65],"children":[],"value":1},{"category":0,"id":"22","name":"甲醛","link_id":[66,67,68],"children":[],"value":1},{"category":0,"id":"23","name":"服装生产","link_id":[69,70,71],"children":[],"value":1},{"category":0,"id":"24","name":"环保","link_id":[72,73,74,75],"children":[],"value":1},{"category":0,"id":"25","name":"织造","link_id":[76,77,78],"children":[],"value":1},{"category":0,"id":"26","name":"款式","link_id":[79,80,81,82],"children":[],"value":1},{"category":0,"id":"27","name":"织物","link_id":[83,84],"children":[],"value":1},{"category":0,"id":"28","name":"美国","link_id":[85,86],"children":[],"value":1},{"category":0,"id":"29","name":"欧盟","link_id":[87,88],"children":[],"value":1},{"category":0,"id":"30","name":"法国","link_id":[89,90],"children":[],"value":1},{"category":0,"id":"41","name":"寄售","link_id":[91,92,93,94],"children":[],"value":1},{"category":0,"id":"42","name":"代理","link_id":[95,96,97],"children":[],"value":1},{"category":0,"id":"43","name":"展卖","link_id":[98,99,100],"children":[],"value":1},{"category":0,"id":"44","name":"博览会","link_id":[101,102,103,104],"children":[],"value":1},{"category":0,"id":"45","name":"招标","link_id":[105,106,107],"children":[],"value":1},{"category":0,"id":"46","name":"投标","link_id":[108,109,110,111],"children":[],"value":1},{"category":0,"id":"47","name":"来料加工","link_id":[112,113],"children":[],"value":1},{"category":0,"id":"48","name":"来样加工","link_id":[114,115],"children":[],"value":1},{"category":0,"id":"49","name":"电子口岸","link_id":[116,117,118],"children":[],"value":1},{"category":0,"id":"50","name":"定程租船","link_id":[119,120,121],"children":[],"value":1},{"category":0,"id":"61","name":"结汇","link_id":[122,123,124],"children":[],"value":1},{"category":0,"id":"62","name":"海关发票","link_id":[125,126,127],"children":[],"value":1},{"category":0,"id":"63","name":"合同","link_id":[128,129,130],"children":[],"value":1},{"category":0,"id":"64","name":"法人","link_id":[131,132,133,134],"children":[],"value":1},{"category":0,"id":"65","name":"自然人","link_id":[135,136,137],"children":[],"value":1},{"category":0,"id":"66","name":"标的","link_id":[138,139,140],"children":[],"value":1},{"category":0,"id":"67","name":"公约","link_id":[141],"children":[],"value":1},{"category":0,"id":"68","name":"磋商","link_id":[142,143],"children":[],"value":1}],"linkTarget":[{"id":0,"weight":"5","target":"2","name":"近义"},{"id":1,"weight":"5","target":"3","name":"整部"},{"id":2,"weight":"5","target":"4","name":"实例"},{"id":3,"weight":"5","target":"1","name":""},{"id":4,"weight":"5","target":"3","name":"属种"},{"id":5,"weight":"5","target":"4","name":"实例"},{"id":6,"weight":"5","target":"1","name":""},{"id":7,"weight":"5","target":"2","name":""},{"id":8,"weight":"5","target":"5","name":"整部"},{"id":9,"weight":"5","target":"68","name":"整部"},{"id":10,"weight":"5","target":"1","name":""},{"id":11,"weight":"5","target":"2","name":""},{"id":12,"weight":"5","target":"6","name":"限定"},{"id":13,"weight":"5","target":"7","name":"同义"},{"id":14,"weight":"5","target":"3","name":""},{"id":15,"weight":"5","target":"6","name":"反义"},{"id":16,"weight":"5","target":"10","name":"学科-研究对象"},{"id":17,"weight":"5","target":"4","name":""},{"id":18,"weight":"5","target":"5","name":""},{"id":19,"weight":"5","target":"8","name":"成员"},{"id":20,"weight":"5","target":"9","name":"并列"},{"id":21,"weight":"5","target":"4","name":""},{"id":22,"weight":"5","target":"9","name":"交叉"},{"id":23,"weight":"5","target":"12","name":"成员"},{"id":24,"weight":"5","target":"6","name":""},{"id":25,"weight":"5","target":"10","name":"因果"},{"id":26,"weight":"5","target":"6","name":""},{"id":27,"weight":"5","target":"7","name":""},{"id":28,"weight":"5","target":"5","name":""},{"id":29,"weight":"5","target":"8","name":""},{"id":30,"weight":"5","target":"21","name":""},{"id":31,"weight":"5","target":"12","name":"近义"},{"id":32,"weight":"5","target":"13","name":"整部"},{"id":33,"weight":"5","target":"14","name":"实例"},{"id":34,"weight":"5","target":"11","name":""},{"id":35,"weight":"5","target":"13","name":"属种"},{"id":36,"weight":"5","target":"14","name":"实例"},{"id":37,"weight":"5","target":"7","name":"实例"},{"id":38,"weight":"5","target":"11","name":""},{"id":39,"weight":"5","target":"12","name":""},{"id":40,"weight":"5","target":"15","name":"整部"},{"id":41,"weight":"5","target":"11","name":""},{"id":42,"weight":"5","target":"12","name":""},{"id":43,"weight":"5","target":"16","name":"限定"},{"id":44,"weight":"5","target":"17","name":"同义"},{"id":45,"weight":"5","target":"65","name":"同义"},{"id":46,"weight":"5","target":"13","name":""},{"id":47,"weight":"5","target":"16","name":"反义"},{"id":48,"weight":"5","target":"20","name":"学科-研究对象"},{"id":49,"weight":"5","target":"14","name":""},{"id":50,"weight":"5","target":"15","name":""},{"id":51,"weight":"5","target":"18","name":"成员"},{"id":52,"weight":"5","target":"19","name":"并列"},{"id":53,"weight":"5","target":"14","name":""},{"id":54,"weight":"5","target":"19","name":"交叉"},{"id":55,"weight":"5","target":"16","name":""},{"id":56,"weight":"5","target":"20","name":"因果"},{"id":57,"weight":"5","target":"49","name":""},{"id":58,"weight":"5","target":"16","name":""},{"id":59,"weight":"5","target":"17","name":""},{"id":60,"weight":"5","target":"15","name":""},{"id":61,"weight":"5","target":"18","name":""},{"id":62,"weight":"5","target":"22","name":"近义"},{"id":63,"weight":"5","target":"23","name":"整部"},{"id":64,"weight":"5","target":"24","name":"实例"},{"id":65,"weight":"5","target":"10","name":""},{"id":66,"weight":"5","target":"21","name":""},{"id":67,"weight":"5","target":"23","name":"属种"},{"id":68,"weight":"5","target":"24","name":"实例"},{"id":69,"weight":"5","target":"21","name":""},{"id":70,"weight":"5","target":"22","name":""},{"id":71,"weight":"5","target":"25","name":"整部"},{"id":72,"weight":"5","target":"21","name":""},{"id":73,"weight":"5","target":"22","name":""},{"id":74,"weight":"5","target":"26","name":"限定"},{"id":75,"weight":"5","target":"27","name":"同义"},{"id":76,"weight":"5","target":"23","name":""},{"id":77,"weight":"5","target":"26","name":"反义"},{"id":78,"weight":"5","target":"30","name":"学科-研究对象"},{"id":79,"weight":"5","target":"24","name":""},{"id":80,"weight":"5","target":"25","name":""},{"id":81,"weight":"5","target":"28","name":"成员"},{"id":82,"weight":"5","target":"29","name":"并列"},{"id":83,"weight":"5","target":"24","name":""},{"id":84,"weight":"5","target":"29","name":"交叉"},{"id":85,"weight":"5","target":"26","name":""},{"id":86,"weight":"5","target":"30","name":"因果"},{"id":87,"weight":"5","target":"26","name":""},{"id":88,"weight":"5","target":"27","name":""},{"id":89,"weight":"5","target":"25","name":""},{"id":90,"weight":"5","target":"28","name":""},{"id":91,"weight":"5","target":"42","name":"近义"},{"id":92,"weight":"5","target":"43","name":"整部"},{"id":93,"weight":"5","target":"44","name":"实例"},{"id":94,"weight":"5","target":"50","name":""},{"id":95,"weight":"5","target":"41","name":""},{"id":96,"weight":"5","target":"43","name":"属种"},{"id":97,"weight":"5","target":"44","name":"实例"},{"id":98,"weight":"5","target":"41","name":""},{"id":99,"weight":"5","target":"42","name":""},{"id":100,"weight":"5","target":"45","name":"整部"},{"id":101,"weight":"5","target":"41","name":""},{"id":102,"weight":"5","target":"42","name":""},{"id":103,"weight":"5","target":"46","name":"限定"},{"id":104,"weight":"5","target":"47","name":"同义"},{"id":105,"weight":"5","target":"43","name":""},{"id":106,"weight":"5","target":"46","name":"反义"},{"id":107,"weight":"5","target":"50","name":"学科-研究对象"},{"id":108,"weight":"5","target":"44","name":""},{"id":109,"weight":"5","target":"45","name":""},{"id":110,"weight":"5","target":"48","name":"成员"},{"id":111,"weight":"5","target":"49","name":"并列"},{"id":112,"weight":"5","target":"44","name":""},{"id":113,"weight":"5","target":"49","name":"交叉"},{"id":114,"weight":"5","target":"46","name":""},{"id":115,"weight":"5","target":"50","name":"因果"},{"id":116,"weight":"5","target":"46","name":""},{"id":117,"weight":"5","target":"47","name":""},{"id":118,"weight":"5","target":"18","name":""},{"id":119,"weight":"5","target":"41","name":""},{"id":120,"weight":"5","target":"45","name":""},{"id":121,"weight":"5","target":"48","name":""},{"id":122,"weight":"5","target":"62","name":"近义"},{"id":123,"weight":"5","target":"63","name":"整部"},{"id":124,"weight":"5","target":"64","name":"实例"},{"id":125,"weight":"5","target":"61","name":""},{"id":126,"weight":"5","target":"63","name":"属种"},{"id":127,"weight":"5","target":"64","name":"实例"},{"id":128,"weight":"5","target":"61","name":""},{"id":129,"weight":"5","target":"62","name":""},{"id":130,"weight":"5","target":"65","name":"整部"},{"id":131,"weight":"5","target":"61","name":""},{"id":132,"weight":"5","target":"62","name":""},{"id":133,"weight":"5","target":"66","name":"限定"},{"id":134,"weight":"5","target":"67","name":"同义"},{"id":135,"weight":"5","target":"63","name":""},{"id":136,"weight":"5","target":"66","name":"反义"},{"id":137,"weight":"5","target":"14","name":""},{"id":138,"weight":"5","target":"64","name":""},{"id":139,"weight":"5","target":"65","name":""},{"id":140,"weight":"5","target":"68","name":"成员"},{"id":141,"weight":"5","target":"64","name":""},{"id":142,"weight":"5","target":"3","name":""},{"id":143,"weight":"5","target":"66","name":""}],"name":"贸易知识","id":0},{"nodes":[{"category":0,"id":"31","name":"直接贸易","link_id":[0,1,2],"children":[],"value":1},{"category":0,"id":"32","name":"间接贸易","link_id":[3,4,5],"children":[],"value":1},{"category":0,"id":"33","name":"出口","link_id":[6,7,8],"children":[],"value":1},{"category":0,"id":"34","name":"进口","link_id":[9,10,11,12],"children":[],"value":1},{"category":0,"id":"35","name":"贸易差额","link_id":[13,14,15],"children":[],"value":1},{"category":0,"id":"36","name":"专门贸易","link_id":[16,17,18,19,20],"children":[],"value":1},{"category":0,"id":"37","name":"国际收支","link_id":[21,22],"children":[],"value":1},{"category":0,"id":"38","name":"净出口","link_id":[23,24],"children":[],"value":1},{"category":0,"id":"39","name":"国际贸易惯例","link_id":[25,26],"children":[],"value":1},{"category":0,"id":"40","name":"包销","link_id":[27,28],"children":[],"value":1},{"category":0,"id":"51","name":"定期租船","link_id":[29,30,31],"children":[],"value":1},{"category":0,"id":"52","name":"国际多式联运","link_id":[32,33,34,35],"children":[],"value":1},{"category":0,"id":"53","name":"推定全损","link_id":[36,37,38],"children":[],"value":1},{"category":0,"id":"54","name":"共同海损","link_id":[39,40,41,42],"children":[],"value":1},{"category":0,"id":"55","name":"单独海损","link_id":[43,44,45],"children":[],"value":1},{"category":0,"id":"56","name":"汇票","link_id":[46,47,48,49],"children":[],"value":1},{"category":0,"id":"57","name":"汇付","link_id":[50,51],"children":[],"value":1},{"category":0,"id":"58","name":"托收","link_id":[52,53],"children":[],"value":1},{"category":0,"id":"59","name":"发盘","link_id":[54,55],"children":[],"value":1},{"category":0,"id":"60","name":"还盘","link_id":[56,57],"children":[],"value":1}],"linkTarget":[{"id":0,"weight":"5","target":"32","name":"近义"},{"id":1,"weight":"5","target":"33","name":"整部"},{"id":2,"weight":"5","target":"34","name":"实例"},{"id":3,"weight":"5","target":"31","name":""},{"id":4,"weight":"5","target":"33","name":"属种"},{"id":5,"weight":"5","target":"34","name":"实例"},{"id":6,"weight":"5","target":"31","name":""},{"id":7,"weight":"5","target":"32","name":""},{"id":8,"weight":"5","target":"35","name":"整部"},{"id":9,"weight":"5","target":"31","name":""},{"id":10,"weight":"5","target":"32","name":""},{"id":11,"weight":"5","target":"36","name":"限定"},{"id":12,"weight":"5","target":"37","name":"同义"},{"id":13,"weight":"5","target":"33","name":""},{"id":14,"weight":"5","target":"36","name":"反义"},{"id":15,"weight":"5","target":"40","name":"学科-研究对象"},{"id":16,"weight":"5","target":"34","name":""},{"id":17,"weight":"5","target":"35","name":""},{"id":18,"weight":"5","target":"38","name":"成员"},{"id":19,"weight":"5","target":"39","name":"并列"},{"id":20,"weight":"5","target":"52","name":"同义"},{"id":21,"weight":"5","target":"34","name":""},{"id":22,"weight":"5","target":"39","name":"交叉"},{"id":23,"weight":"5","target":"36","name":""},{"id":24,"weight":"5","target":"40","name":"因果"},{"id":25,"weight":"5","target":"36","name":""},{"id":26,"weight":"5","target":"37","name":""},{"id":27,"weight":"5","target":"35","name":""},{"id":28,"weight":"5","target":"38","name":""},{"id":29,"weight":"5","target":"52","name":"近义"},{"id":30,"weight":"5","target":"53","name":"整部"},{"id":31,"weight":"5","target":"54","name":"实例"},{"id":32,"weight":"5","target":"51","name":""},{"id":33,"weight":"5","target":"53","name":"属种"},{"id":34,"weight":"5","target":"54","name":"实例"},{"id":35,"weight":"5","target":"36","name":""},{"id":36,"weight":"5","target":"51","name":""},{"id":37,"weight":"5","target":"52","name":""},{"id":38,"weight":"5","target":"55","name":"整部"},{"id":39,"weight":"5","target":"51","name":""},{"id":40,"weight":"5","target":"52","name":""},{"id":41,"weight":"5","target":"56","name":"限定"},{"id":42,"weight":"5","target":"57","name":"同义"},{"id":43,"weight":"5","target":"53","name":""},{"id":44,"weight":"5","target":"56","name":"反义"},{"id":45,"weight":"5","target":"60","name":"学科-研究对象"},{"id":46,"weight":"5","target":"54","name":""},{"id":47,"weight":"5","target":"55","name":""},{"id":48,"weight":"5","target":"58","name":"成员"},{"id":49,"weight":"5","target":"59","name":"并列"},{"id":50,"weight":"5","target":"54","name":""},{"id":51,"weight":"5","target":"59","name":"交叉"},{"id":52,"weight":"5","target":"56","name":""},{"id":53,"weight":"5","target":"60","name":"因果"},{"id":54,"weight":"5","target":"56","name":""},{"id":55,"weight":"5","target":"57","name":""},{"id":56,"weight":"5","target":"55","name":""},{"id":57,"weight":"5","target":"58","name":""}],"name":"服装知识","id":1}]}
        }
    });

}(window, jQuery));