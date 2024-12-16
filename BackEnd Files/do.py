import csv
import os
import shutil

def csv_to_js_array(file_name):
    """Reads a CSV file and returns an array of parsed data."""
    with open(file_name, 'r', encoding='utf-8') as file:  # Ensure correct encoding
        reader = csv.reader(file)
        next(reader)  # Skip header row

        data = []
        for row in reader:
            # Ensure URL is correctly formatted and includes 'https://'
            profile_url = row[2].strip()
            if not profile_url.startswith("http"):
                profile_url = f"https://{profile_url}"

            data.append([
                row[0],              # User Name
                profile_url,         # Profile URL
                int(row[6]),         # Skill Badges Completed
                int(row[8]),         # Arcade Games Completed
                int(row[6]) + int(row[8])  # Total Badges
            ])
        return data

def format_js_array(data):
    """Formats the data as a valid JavaScript array string."""
    return '[\n' + ',\n'.join(f'    {row}' for row in data) + '\n];'

def update_script_js(prev_data, today_data):
    """Updates the prevData and todayData arrays inside script.js."""
    with open('script.js', 'r', encoding='utf-8') as f:
        script_content = f.read()

    # Format the arrays as valid JavaScript
    prev_data_str = format_js_array(prev_data)
    today_data_str = format_js_array(today_data)

    # Replace the existing arrays in script.js
    updated_script = replace_js_array(script_content, 'const prevData =', prev_data_str)
    updated_script = replace_js_array(updated_script, 'const todayData =', today_data_str)

    # Write the updated content back to script.js
    with open('script.js', 'w', encoding='utf-8') as f:
        f.write(updated_script)

def replace_js_array(script_content, array_name, new_array_str):
    """Replaces the array content of a given variable in the script."""
    start = script_content.find(array_name)
    if start == -1:
        raise ValueError(f"{array_name} not found in script.js")

    # Find the end of the current array (look for the closing bracket)
    end = script_content.find('];', start) + 2

    # Replace the old array content with the new array string
    return script_content[:start] + f'{array_name} {new_array_str}' + script_content[end:]

def manage_csv_files():
    """Handles the CSV renaming process."""
    if os.path.exists('prev.csv'):
        os.remove('prev.csv')

    shutil.move('today.csv', 'prev.csv')
    shutil.move('1.csv', 'today.csv')

def main():
    manage_csv_files()
    prev_data = csv_to_js_array('prev.csv')
    today_data = csv_to_js_array('today.csv')
    update_script_js(prev_data, today_data)

    print("CSV files managed and script.js updated with the latest data.")

if __name__ == "__main__":
    main()
