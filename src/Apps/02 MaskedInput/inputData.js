export const personalInputData = [
    {texto: 'Nombre', id: 'name'},
    {texto: 'Apellido Paterno', id: 'lastName'},
    {texto: 'Segundo Apellido', id: 'lastLastName'},
    {texto: 'Fecha de Nacimiento (dd/mm/yyyy)', id: 'birthDate'},
    {texto: 'Email', id: 'email', type: 'email'},
    {texto: 'Dirección', id: 'adress'},
    {texto: 'Lada', id: 'lada', type: 'number'},
    {texto: 'Teléfono', id: 'phone', type: 'number'},
    {texto: 'Telefono Fijo', id: 'homePhone', required: false, type: 'number'},
    {texto: 'Cedula Unica de Población', id: 'personalId'},
    {texto: 'Número de Pasaporte', id: 'passportId'},
  ];

export const emergencyContactData = [
    {texto: 'Nombre', id: 'emergencyname'},
    {texto: 'Apellido Paterno', id: 'emergencylastName'},
    {texto: 'Segundo Apellido', id: 'emergencylastLastName'},
    {texto: 'Fecha de Nacimiento (dd/mm/yyyy)', id: 'emergencybirthDate'},
    {texto: 'Email', id: 'emergencyemail', type: 'email'},
    {texto: 'Dirección', id: 'emergencyadress'},
    {texto: 'Lada', id: 'emergencylada', type: 'number'},
    {texto: 'Teléfono', id: 'emergencyphone', type: 'number'},
];