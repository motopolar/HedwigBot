case 'motomami': {
    rate = body.slice(9);
    let random = `${Math.floor(Math.random() * 100)}`;
    racista = random;
    let ra = '';
    if (racista < 20) {
        ra = '🦋 Una motomami te abraza y es mejor que abrazar un peluche*';
    } else if (racista == 21) {
        ra = '🦋 Una motomami es leal con los suyos, porque ser leal es un flex*';
    } else if (racista == 23) {
        ra = '🦋 Una motomami cuida de otras motomamis*';
    } else if (racista == 24) {
        ra = '🦋 A una motomami le gusta la leche*';
    } else if (racista == 25) {
        ra = '🦋 Una motomami tiene las manos de mariposa y brazos y cuerpo de mariposa también*';
    } else if (racista == 26) {
        ra = '🦋 Una motomami destruye con gusto sus obras anteriores para dar paso a las obras siguientes*';
    } else if (racista == 27) {
        ra = '🦋 Una motomami no necesita, la necesitan*';
    } else if (racista == 28) {
        ra = '🦋 Una motomami es muy suya y se transforma*';
    } else if (racista == 29) {
        ra = '🦋 Una motomami es una leyenda del fitness, pero siempre pide postre*';
    } else if (racista == 30) {
        ra = '🦋 Una motomami sabe quién es y lo lleva por delante porque es brava*';
    } else if (racista == 31) {
        ra = '🦋 A una motomami no le importa mancharse las manos cuando las pone dentro del motor para ajustarlo*';
    } else if (racista == 32) {
        ra = '🦋 No puedes joder con una motomami*';
    } else if (racista == 33) {
        ra = '🦋 Frontea con moto, protege a tu mami*';
    } else if (racista == 34) {
        ra = '🦋 El casco es el mejor bolso de una motomami*';
    } else if (racista == 35) {
        ra = '🦋 Una motomami sabe que el mejor artista es Dios*';
    } else if (racista == 36) {
        ra = '🦋 Una motomami dice hoy voy un poco motomami porque se ha bebido unas copillas*';
    } else if (racista == 37) {
        ra = '🦋 Una motomami te puede ride como a su bike*';
    } else if (racista == 38) {
        ra = '🦋 Si una motomami diseñara tacones, lo haría también del 44*';
    } else if (racista == 39) {
        ra = '🦋 Una Motomami tarda lo que se tenga que tardar en hacer un álbum*';
    } else if (racista == 40) {
        ra = '🦋 Una motomami no sabe cuando rendirse*';
    } else if (racista == 41) {
        ra = '🦋 Una motomami nunca llega tarde, son los demás que llegan muy temprano*';
    } else if (racista == 42) {
        ra = '🦋 Una motomami te abraza y es mejor que abrazar un peluche*';
    } else if (racista == 43) {
        ra = '🦋 Una motomami es leal con los suyos, porque ser leal es un flex*';
    } else if (racista == 44) {
        ra = '🦋 Una motomami cuida de otras motomamis*';
    } else if (racista == 45) {
        ra = '🦋 A una motomami le gusta la leche*';
    } else if (racista == 46) {
        ra = '🦋 Una motomami tiene las manos de mariposa y brazos y cuerpo de mariposa también*';
    } else if (racista == 47) {
        ra = '🦋 Una motomami destruye con gusto sus obras anteriores para dar paso a las obras siguientes*';
    } else if (racista == 48) {
        ra = '🦋 Una motomami no necesita, la necesitan*';
    } else if (racista == 49) {
        ra = '🦋 Una motomami es muy suya y se transforma*';
    } else if (racista == 50) {
        ra = '🦋 Una motomami es una leyenda del fitness, pero siempre pide postre*';
    } else if (racista > 51) {
        ra = '🦋 Una motomami sabe quién es y lo lleva por delante porque es brava*';
    }
    hasil = `${rate} Usted es ${random}% motomami\n\n${ra}`;
    m.reply(hasil);
}
break;
