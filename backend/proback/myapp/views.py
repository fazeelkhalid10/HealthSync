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
    query = "select top(10) UserId from Users"

    # Execute the query and fetch all results
    with connection.cursor() as cursor:
        cursor.execute(query)
        rows = cursor.fetchall()

    # Construct response data from the result
    employee_list = []
    for row in rows:
        employee = {
            'id': row[0]
            
        }
        employee_list.append(employee)
    
    return Response(employee_list)

#repository function
def execute_stored_procedure(proc_name, params=None, is_select=True):
    
    with connection.cursor() as cursor:
        if params is None:
            params = {}

        
        param_str = ', '.join([f"@{k}='{v}'" if isinstance(v, str) else f"@{k}={v}" for k, v in params.items()])
        sql_call = f"EXEC {proc_name} {param_str}"

        
        if is_select:
            cursor.execute(sql_call)
            rows = cursor.fetchall()
            col_names = [desc[0] for desc in cursor.description]

            
            results = [dict(zip(col_names, row)) for row in rows]
            return results
        else:
            cursor.execute(sql_call)
            return {"status": "Success", "message": f"Procedure '{proc_name}' executed successfully."}

  
@api_view(['GET'])
def get_patients(request):
    # Set a session variable without using the database
    request.session['name'] = 'Ludwik'
    
    # Simulate fetching patient data
    patients = [
        {'id': 1, 'name': 'John Doe'},
        {'id': 2, 'name': 'Jane Smith'},
    ]
    
    # Return the result as a JSON response
    return Response({'patients': patients, 'session_name': request.session['name']}, status=status.HTTP_200_OK)


@api_view(['GET'])
def get_patients1(request):
    # Check if the session variable 'name' exists
    session_name = request.session.get('name')  # This will return None if 'name' doesn't exist

    # If the session variable is None, return null
    if session_name is None:
        return Response({'session_name': None}, status=status.HTTP_200_OK)
    
    # Return the session variable as a JSON response
    return Response({'session_name': session_name}, status=status.HTTP_200_OK)