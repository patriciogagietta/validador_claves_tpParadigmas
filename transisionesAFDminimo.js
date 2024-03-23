// TRANSICIONES AFD-Minimo
const transiciones = {
    'I': { 'min': 'IV', 'may': 'II', 'num': 'III' },
    'II': { 'min': 'VI', 'may': 'VII', 'num': 'V' },
    'III': { 'min': 'VIII', 'may': 'V', 'num': 'IX' },
    'IV': { 'min': 'X', 'may': 'VI', 'num': 'VIII' },
    'V': { 'min': 'XII', 'may': 'XI', 'num': 'XI' },
    'VI': { 'min': 'XIII', 'may': 'XIII', 'num': 'XII' },
    'VII': { 'min': 'XIII', 'may': 'XIV', 'num': 'XI' },
    'VIII': { 'min': 'XV', 'may': 'XII', 'num': 'XV' },
    'IX': { 'min': 'XV', 'may': 'XI', 'num': 'XVI' },
    'X': { 'min': 'XVII', 'may': 'XIII', 'num': 'XV' },
    'XI': { 'min': 'XXI', 'may': 'XVIII', 'num': 'XVIII' },
    'XII': { 'min': 'XXI', 'may': 'XXI', 'num': 'XXI' },
    'XIII': { 'min': 'XX', 'may': 'XX', 'num': 'XXI' },
    'XIV': { 'min': 'XX', 'may': 'XIV', 'num': 'XVIII' },
    'XV': { 'min': 'XIX', 'may': 'XXI', 'num': 'XIX' },
    'XVI': { 'min': 'XIX', 'may': 'XVIII', 'num': 'XVI' },
    'XVII': { 'min': 'XVII', 'may': 'XX', 'num': 'XIX' },
    'XVIII': { 'min': 'FINAL', 'may': 'XVIII', 'num': 'XVIII' },
    'XIX': { 'min': 'XIX', 'may': 'FINAL', 'num': 'XIX' },
    'XX': { 'min': 'XX', 'may': 'XX', 'num': 'FINAL' },
    'XXI': { 'min': 'FINAL', 'may': 'FINAL', 'num': 'FINAL' },
    'FINAL': { 'min': 'FINAL', 'may': 'FINAL', 'num': 'FINAL' },
};

// TRANSFORMACIONES AFD
const transiciones2 = {
    '0': { 'min': '47', 'may': '1', 'num': '31' },
    '1': { 'min': '9', 'may': '16', 'num': '2' },
    '2': { 'min': '5', 'may': '3', 'num': '4' },
    '3': { 'min': '7', 'may': '6', 'num': '6' },
    '4': { 'min': '7', 'may': '6', 'num': '6' },
    '5': { 'min': '7', 'may': '7', 'num': '7' },
    '6': { 'min': '8', 'may': '6', 'num': '6' },
    '7': { 'min': '8', 'may': '8', 'num': '8' },
    '8': { 'min': '8', 'may': '8', 'num': '8' },
    '9': { 'min': '11', 'may': '10', 'num': '12' },
    '10': { 'min': '13', 'may': '13', 'num': '14' },
    '11': { 'min': '13', 'may': '13', 'num': '14' },
    '12': { 'min': '14', 'may': '14', 'num': '14' },
    '13': { 'min': '13', 'may': '13', 'num': '15' },
    '14': { 'min': '15', 'may': '15', 'num': '15' },
    '15': { 'min': '15', 'may': '15', 'num': '15' },
    '16': { 'min': '19', 'may': '17', 'num': '18' },
    '17': { 'min': '20', 'may': '70', 'num': '22' },
    '18': { 'min': '21', 'may': '22', 'num': '22' },
    '19': { 'min': '20', 'may': '20', 'num': '21' },
    '20': { 'min': '20', 'may': '20', 'num': '23' },
    '21': { 'min': '23', 'may': '23', 'num': '23' },
    '22': { 'min': '23', 'may': '22', 'num': '22' },
    '23': { 'min': '23', 'may': '23', 'num': '23' },
    '24': { 'min': '26', 'may': '25', 'num': '27' },
    '25': { 'min': '29', 'may': '29', 'num': '29' },
    '26': { 'min': '28', 'may': '29', 'num': '28' },
    '27': { 'min': '28', 'may': '29', 'num': '28' },
    '28': { 'min': '28', 'may': '30', 'num': '28' },
    '29': { 'min': '30', 'may': '30', 'num': '30' },
    '30': { 'min': '30', 'may': '30', 'num': '30' },
    '31': { 'min': '24', 'may': '32', 'num': '39' },
    '32': { 'min': '35', 'may': '34', 'num': '33' },
    '33': { 'min': '36', 'may': '37', 'num': '37' },
    '34': { 'min': '36', 'may': '37', 'num': '37' },
    '35': { 'min': '36', 'may': '36', 'num': '36' },
    '36': { 'min': '38', 'may': '38', 'num': '38' },
    '37': { 'min': '38', 'may': '37', 'num': '37' },
    '38': { 'min': '38', 'may': '38', 'num': '38' },
    '39': { 'min': '42', 'may': '41', 'num': '40' },
    '40': { 'min': '43', 'may': '44', 'num': '71' },
    '41': { 'min': '45', 'may': '44', 'num': '44' },
    '42': { 'min': '43', 'may': '45', 'num': '43' },
    '43': { 'min': '43', 'may': '46', 'num': '43' },
    '44': { 'min': '46', 'may': '44', 'num': '44' },
    '45': { 'min': '46', 'may': '46', 'num': '46' },
    '46': { 'min': '46', 'may': '46', 'num': '46' },
    '47': { 'min': '62', 'may': '48', 'num': '55' },
    '48': { 'min': '50', 'may': '51', 'num': '49' },
    '49': { 'min': '52', 'may': '52', 'num': '52' },
    '50': { 'min': '53', 'may': '53', 'num': '52' },
    '51': { 'min': '53', 'may': '53', 'num': '52' },
    '52': { 'min': '54', 'may': '54', 'num': '54' },
    '53': { 'min': '53', 'may': '53', 'num': '54' },
    '54': { 'min': '54', 'may': '54', 'num': '54' },
    '55': { 'min': '57', 'may': '56', 'num': '58' },
    '56': { 'min': '60', 'may': '60', 'num': '60' },
    '57': { 'min': '59', 'may': '60', 'num': '59' },
    '58': { 'min': '59', 'may': '60', 'num': '59' },
    '59': { 'min': '59', 'may': '61', 'num': '59' },
    '60': { 'min': '61', 'may': '61', 'num': '61' },
    '61': { 'min': '61', 'may': '61', 'num': '61' },
    '62': { 'min': '63', 'may': '65', 'num': '64' },
    '63': { 'min': '72', 'may': '66', 'num': '67' },
    '64': { 'min': '67', 'may': '68', 'num': '67' },
    '65': { 'min': '66', 'may': '66', 'num': '68' },
    '66': { 'min': '66', 'may': '66', 'num': '69' },
    '67': { 'min': '67', 'may': '69', 'num': '67' },
    '68': { 'min': '69', 'may': '69', 'num': '69' },
    '69': { 'min': '69', 'may': '69', 'num': '69' },
    '70': { 'min': '20', 'may': '70', 'num': '22' },
    '71': { 'min': '43', 'may': '44', 'num': '71' },
    '72': { 'min': '72', 'may': '66', 'num': '67' },
};