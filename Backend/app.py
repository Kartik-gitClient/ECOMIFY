from flask import Flask, jsonify, request
from flask_cors import CORS  # Import CORS
import mysql.connector

app = Flask(__name__)
CORS(app, origins=["http://localhost:3000", "https://my-react-app.vercel.app"])


def get_db_connection():
    """Helper function to get a database connection."""
    return mysql.connector.connect(
        host='localhost',
        user='root',
        password='root',
        database='Employee'
    )

# Employee Routes

@app.route('/view-employees', methods=['GET'])
def view_employees():
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT id, name, salary, department, dob, address FROM employee")
        rows = cursor.fetchall()

        employees = []
        for row in rows:
            employee = {
                'id': row[0],
                'name': row[1],
                'salary': row[2],
                'department': row[3],
                'dob': str(row[4]),
                'address': row[5]
            }
            employees.append(employee)

        return jsonify(employees)

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    finally:
        cursor.close()
        conn.close()

@app.route('/add-employee', methods=['POST'])
def add_employee():
    employee_data = request.get_json()
    try:
        name = employee_data['name']
        salary = employee_data['salary']
        department = employee_data['department']
        dob = employee_data['dob']
        address = employee_data['address']

        conn = get_db_connection()
        cursor = conn.cursor()
        query = """
        INSERT INTO employee (name, salary, department, dob, address)
        VALUES (%s, %s, %s, %s, %s)
        """
        cursor.execute(query, (name, salary, department, dob, address))
        conn.commit()

        return jsonify({"message": "Employee added successfully"}), 201

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    finally:
        cursor.close()
        conn.close()

@app.route('/retire-employee/<int:employee_id>', methods=['DELETE'])
def retire_employee(employee_id):
    try:
        conn = mysql.connector.connect(
            host='localhost',
            user='root',
            password='root',
            database='Employee'
        )
        cursor = conn.cursor()

        
        cursor.execute("SELECT * FROM employee WHERE id = %s", (employee_id,))
        employee = cursor.fetchone()

        if not employee:
            return jsonify({"error": "Employee not found"}), 404

      
        cursor.execute("DELETE FROM employee WHERE id = %s", (employee_id,))
        conn.commit()

        return jsonify({"message": "Employee retired successfully"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    finally:
        cursor.close()
        conn.close()
        
@app.route('/fetch-employee/<int:employee_id>', methods=['GET'])
def fetch_employee(employee_id):
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT id, name, salary, department, dob, address FROM employee WHERE id = %s", (employee_id,))
        row = cursor.fetchone()

        if row:
            employee = {
                'id': row[0],
                'name': row[1],
                'salary': row[2],
                'department': row[3],
                'dob': str(row[4]),
                'address': row[5]
            }
            return jsonify(employee), 200
        else:
            return jsonify({"error": "Employee not found"}), 404

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    finally:
        cursor.close()
        conn.close()


@app.route('/update-employee/<int:employee_id>', methods=['GET', 'PUT'])
def update_employee(employee_id):
    conn = mysql.connector.connect(
        host='localhost',
        user='root',
        password='root',
        database='Employee'
    )
    cursor = conn.cursor()

    if request.method == 'GET':
        try:
            cursor.execute("SELECT name, salary, department, dob, address FROM employee WHERE id = %s", (employee_id,))
            row = cursor.fetchone()

            if row:
                employee = {
                    'id': employee_id,
                    'name': row[0],
                    'salary': row[1],
                    'department': row[2],
                    'dob': row[3].isoformat() if row[3] else None,
                    'address': row[4]
                }
                return jsonify(employee)
            else:
                return jsonify({"error": "Employee not found"}), 404
        except Exception as e:
            return jsonify({"error": str(e)}), 500
        finally:
            cursor.close()
            conn.close()

    if request.method == 'PUT':
        employee_data = request.get_json()
        try:
            name = employee_data['name']
            salary = employee_data['salary']
            department = employee_data['department']
            dob = employee_data['dob']
            address = employee_data['address']

            cursor.execute("""
                UPDATE employee
                SET name = %s, salary = %s, department = %s, dob = %s, address = %s
                WHERE id = %s
            """, (name, salary, department, dob, address, employee_id))
            conn.commit()

            return jsonify({"message": "Employee updated successfully"}), 200

        except Exception as e:
            return jsonify({"error": str(e)}), 500
        finally:
            cursor.close()
            conn.close()

# Product Routes ---------------------------------------------------------------------------------------

@app.route('/add-product', methods=['POST'])
def add_product():
    product_data = request.get_json()
    try:
        brand = product_data['brand']
        product = product_data['product']
        category = product_data['category']
        cost_price = product_data['cost_price']
        selling_price = product_data['selling_price']
        profit = product_data['profit']

        if not brand or not product or not category or not cost_price or not selling_price or not profit:
            return jsonify({"error": "Missing fields, ensure all fields are filled"}), 400

        conn = get_db_connection()
        cursor = conn.cursor()

        query = """
        INSERT INTO products (brand, product, category, cost_price, selling_price, profit)
        VALUES (%s, %s, %s, %s, %s, %s)
        """
        cursor.execute(query, (brand, product, category, cost_price, selling_price, profit))
        conn.commit()

        return jsonify({"message": "Product added successfully!"}), 201

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    finally:
        cursor.close()
        conn.close()

@app.route('/product-summary/<int:product_id>', methods=['GET'])
def get_product_summary(product_id):
    try:
        conn = get_db_connection()
        cursor = conn.cursor(dictionary=True)
        
        
        cursor.execute("SELECT * FROM products WHERE id = %s", (product_id,))
        product = cursor.fetchone()
        
        if not product:
            return jsonify({'error': 'Product not found'}), 404

        return jsonify({'product': product}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    finally:
        cursor.close()
        conn.close()

@app.route('/delete-product/<int:product_id>', methods=['DELETE'])
def delete_product(product_id):
    try:
        conn = get_db_connection()
        cursor = conn.cursor()

        # Check if the product exists
        cursor.execute("SELECT * FROM products WHERE id = %s", (product_id,))
        product = cursor.fetchone()

        if not product:
            return jsonify({'error': 'Product not found'}), 404

        # Delete the product
        cursor.execute("DELETE FROM products WHERE id = %s", (product_id,))
        conn.commit()

        return jsonify({'message': 'Product deleted successfully!'}), 200
    except Exception as e:
        conn.rollback()
        return jsonify({'error': str(e)}), 500
    finally:
        cursor.close()
        conn.close()
        
@app.route('/view-products', methods=['GET'])
def view_products():
    try:
        conn = get_db_connection()
        cursor = conn.cursor(dictionary=True)

        # Fetch all products
        cursor.execute("SELECT * FROM products")
        products = cursor.fetchall()

        if not products:
            return jsonify({"message": "No products found"}), 404

        return jsonify(products), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    finally:
        cursor.close()
        conn.close()
        
@app.route('/sort-products', methods=['GET'])
def get_products():
   
    sort_by = request.args.get('sort_by', 'cost_price')  
    order = request.args.get('order', 'ascending') 

   
    valid_columns = {'cost_price', 'selling_price', 'profit'}
    if sort_by not in valid_columns:
        return jsonify({"error": "Invalid sort parameter"}), 400

    
    sort_direction = 'ASC' if order == 'ascending' else 'DESC'

    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)

    
    query = f'SELECT id, brand, product, category, cost_price, selling_price, (selling_price - cost_price) AS profit FROM products ORDER BY {sort_by} {sort_direction}'
    
    cursor.execute(query)
    products = cursor.fetchall()

    cursor.close()
    connection.close()

    return jsonify(products)

@app.route('/update-product/<int:product_id>', methods=['GET', 'PUT'])
def update_product(product_id):
    conn = mysql.connector.connect(
        host='localhost',
        user='root',
        password='root',
        database='Employee'  
    )
    cursor = conn.cursor()

    if request.method == 'GET':
        try:
            cursor.execute("SELECT brand, product , category, cost_price , selling_price , profit FROM products WHERE id = %s", (product_id,))
            row = cursor.fetchone()

            if row:
                product = {
                    'id': product_id,
                    'brand': row[0],
                    'product': row[1],
                    'category': row[2],
                    'cost-price': row[3],
                    'selling-price': row[4],
                    'profit': row[5]
                }
                return jsonify(product)
            else:
                return jsonify({"error": "Product not found"}), 404
        except Exception as e:
            return jsonify({"error": str(e)}), 500
        finally:
            cursor.close()
            conn.close()

    if request.method == 'PUT':
        product_data = request.get_json()
        try:
            brand = product_data['brand']
            product = product_data['product']
            category = product_data['category']
            cost = product_data['cost-price']
            sell = product_data['selling-price']
            profit=product_data['profit']

            cursor.execute("""
                UPDATE products
                SET name = %s, price = %s, category = %s, stock = %s, description = %s
                WHERE id = %s
            """ , (brand, product, category, cost, sell , profit , product_id))
            conn.commit()

            return jsonify({"message": "Product updated successfully"}), 200

        except Exception as e:
            return jsonify({"error": str(e)}), 500
        finally:
            cursor.close()
            conn.close()

        
if __name__ == '__main__':
    app.run(debug=True)
