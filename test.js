const test = require('ava')
const objectToArray = require("./index")

const objectData = [
    [
        {
            "ano": 2020,
            "mes": 1,
            "apelido": "Mud"
        },
        {
            "ano": 2020,
            "mes": 2,
            "apelido": "Mud"
        }
    ],
    [
        {
            "ano": 2020,
            "mes": 1,
            "apelido": "Bruno"
        },
        {
            "ano": 2020,
            "mes": 2,
            "apelido": "Bruno"
        }
    ]
]

test('Receive an normal object data', t => {
    const result = objectToArray(objectData)
    const expected = [["ano","mes","apelido"], [2020,1,"Mud"],[2020,2,"Mud"],[2020,1,"Bruno"],[2020,2,"Bruno"]]
    console.log('Receive an normal object data')
    console.log(result)
    // console.log(expected)
    t.deepEqual(result, expected)
})

const dataEmpty = []

test('Recive a values without a object', t => {
	const error = t.throws(() => {
		objectToArray(dataEmpty);
	}, {instanceOf: TypeError});
	t.is(error.message, "Cannot read property \'0\' of undefined");
});

const dataZero = 0

test('Recive a values 0', t => {
	const error = t.throws(() => {
		objectToArray(dataZero);
	}, {instanceOf: TypeError});
	t.is(error.message, "Cannot read property \'0\' of undefined");
});

const dataNumber = 100

test('Recive a values number', t => {
	const error = t.throws(() => {
		objectToArray(dataNumber);
	}, {instanceOf: TypeError});
	t.is(error.message, "Cannot read property \'0\' of undefined");
});

const dataInvalidObject = {nome:"Ahmad", sobrenome:"Forhat", idade:24}

test('Recive a Invalid object', t => {
	const error = t.throws(() => {
		objectToArray(dataInvalidObject);
	}, {instanceOf: TypeError});
	t.is(error.message, "Cannot read property \'0\' of undefined");
});