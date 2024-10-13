from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])  # Specify the HTTP method for this view
def dummy_data_view(request):
    # Dummy data to return
    dummy_data = {
        'message': 'Hello, this is dummy data!',
        'status': 'success',
        'data': {
            'item1': 'value1',
            'item2': 'value2',
            'item3': 'value3',
        }
    }
    return Response(dummy_data)
