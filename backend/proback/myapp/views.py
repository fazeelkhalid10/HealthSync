from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.db import connection
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





@api_view(['GET'])
def get_employees_by_query(request):
    # Raw SQL query to select data from Employee table
    query = "select top(10) UserId,FirstName, LastName from rpm_Patients"

    # Execute the query and fetch all results
    with connection.cursor() as cursor:
        cursor.execute(query)
        rows = cursor.fetchall()

    # Construct response data from the result
    employee_list = []
    for row in rows:
        employee = {
            'id': row[0],
            'name': row[1],
            'position': row[2],
        }
        employee_list.append(employee)

    return Response(employee_list)