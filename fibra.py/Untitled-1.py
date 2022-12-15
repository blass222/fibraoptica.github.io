
import requests

def obtener_fibra(posicion):
    url = 'https://www.example.com/fibra/{}'.format(posicion)
    respuesta = requests.get(url)
    if respuesta.status_code == 200:
        datos = respuesta.json()
        return datos['color'], datos['buffer']
    else:
        return None, None

posicion = input('Ingresa la posicion de la fibra: ')
color, buffer = obtener_fibra(posicion)

if color and buffer:
    print('Color: {}'.format(color))
    print('Buffer: {}'.format(buffer))
else:
    print('Error: No se ha encontrado la fibra')