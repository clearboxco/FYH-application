

const select = document.getElementById('state');
const states = ['AL',
'NE',
'AK',
'NV',
'AZ',
'NH',
'AR',
'NJ',
'CA',
'NM',
'CO',
'NY',
'CT',
'NC',
'DE',
'ND',
'DC',
'OH',
'FL',
'OK',
'GA',
'OR',
'HI',
'PA',
'ID',
'PR',
'IL',
'RI',
'IN',
'SC',
'IA',
'SD',
'KS',
'TN',
'KY',
'TX',
'LA',
'UT',
'ME',
'VT',
'MD',
'VA',
'MA',
'VI',
'MI',
'WA',
'MN',
'WV',
'MS',
'WI',
'MO',
'WY',
'MT',
];



for (let i = 0; i < states.length; i++) {
    const option = document.createElement('option');
    option.value = states[i];
    option.text = states[i];
    select.appendChild(option);
}