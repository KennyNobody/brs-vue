/* eslint-disable */

export default {
	ru: { 
		messages: {
			_default: function (n) {
				return 'Значение поля ' + n + ' недопустимо.'
			},
			after: function (n, e) {
				var t = e[0];
				return 'В поле ' + n + ' должна быть дата после ' + (e[1] ? 'или равная ' : '') + t + '.'
			},
			alpha: function (n) {
				return 'Поле ' + n + ' может содержать только буквы.'
			},
			alpha_dash: function (n) {
				return 'Поле ' + n + ' может содержать только буквы, цифры и дефис.'
			},
			alpha_num: function (n) {
				return 'Поле ' + n + ' может содержать только буквы и цифры.'
			},
			alpha_spaces: function (n) {
				return 'Поле ' + n + ' может содержать только буквы и пробелы.'
			},
			before: function (n, e) {
				var t = e[0];
				return 'В поле ' + n + ' должна быть дата до ' + (e[1] ? 'или равная ' : '') + t + '.'
			},
			between: function (n, e) {
				return 'Поле ' + n + ' должно быть между ' + e[0] + ' и ' + e[1] + '.'
			},
			confirmed: function (n, e) {
				return 'Поле ' + n + ' не совпадает с полем ' + e[0] + '.'
			},
			credit_card: function (n) {
				return 'Поле ' + n + ' должно быть действительным номером карты'
			},
			date_between: function (n, e) {
				return 'Поле ' + n + ' должно быть между ' + e[0] + ' и ' + e[1] + '.'
			},
			date_format: function (n, e) {
				return 'Поле ' + n + ' должно быть в формате ' + e[0] + '.'
			},
			decimal: function (n, e) {
				void 0 === e && (e = []);
				var t = e[0];
				return void 0 === t && (t = '*'), 'Поле ' + n + ' должно быть числовым и может содержать' + ('*' === t ? ' десятичные числа' : ' ' + t + ' десятичных чисел') + ''
			},
			digits: function (n, e) {
				return 'Поле ' + n + ' должно быть числовым и точно содержать ' + e[0] + ' цифры'
			},
			dimensions: function (n, e) {
				return 'Поле ' + n + ' должно быть ' + e[0] + ' пикселей на ' + e[1] + ' пикселей'
			},
			email: function (n) {
				return 'Введите правильный email'
			},
			excluded: function (n) {
				return 'Поле ' + n + ' должно быть допустимым значением'
			},
			ext: function (n, e) {
				return 'Поле ' + n + ' должно быть действительным файлом (' + e.slice(0) + ')'
			},
			image: function (n) {
				return 'Поле ' + n + ' должно быть изображением'
			},
			included: function (n) {
				return 'Поле ' + n + ' должно быть допустимым значением'
			},
			integer: function (n) {
				return 'Поле ' + n + ' должно быть целым числом'
			},
			ip: function (n) {
				return 'Поле ' + n + ' должно быть действительным IP-адресом'
			},
			length: function (n, e) {
				var t = e[0],
				r = e[1];
				return r ? 'Длина поля ' + n + ' должна быть между ' + t + ' и ' + r + '.' : 'Длина поля ' + n + ' должна быть ' + t + '.'
			},
			max: function (n, e) {
				return 'Поле ' + n + ' не может быть более ' + e[0] + ' символов'
			},
			max_value: function (n, e) {
				return 'Поле ' + n + ' должно быть ' + e[0] + ' или менее'
			},
			mimes: function (n, e) {
				return 'Поле ' + n + ' должно иметь допустимый тип файла (' + e.slice(0) + ')'
			},
			min: function (n, e) {
				return 'Минимум ' + e[0] + ' символов'
			},
			min_value: function (n, e) {
				return 'Поле ' + n + ' должно быть ' + e[0] + ' или больше'
			},
			numeric: function (n) {
				return 'Поле ' + n + ' должно быть числом'
			},
			regex: function (n) {
				return 'Поле ' + n + ' имеет ошибочный формат'
			},
			required: function (n) {
				return 'Поле обязательно для заполнения'
			},
			size: function (n, e) {
				return 'Поле ' + n + ' должно быть меньше, чем ' + function (n) {
					var e = 1024,
					t = 0 === (n = Number(n) * e) ? 0 : Math.floor(Math.log(n) / Math.log(e));
					return 1 * (n / Math.pow(e, t)).toFixed(2) + ' ' + ['Byte', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'][t]
				}(e[0]) + '.'
			},
			url: function (n) {
				return 'Поле ' + n + ' имеет ошибочный формат URL'
			}
		}
	}
}

/* eslint-enable */
