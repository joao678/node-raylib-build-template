import subprocess
import shutil
import os
import os.path
import lief
from dotenv import load_dotenv
load_dotenv()

def delete_local_node():
    if (os.path.exists(node_executable)):
        os.remove(node_executable)

node_executable = os.getcwd()+"\\node.exe"
delete_local_node()

print('Copying node.exe...')
shutil.copyfile("C:\\Program Files\\nodejs\\node.exe", node_executable)

print('Modifying node.exe subsystem...')
binary = lief.parse(node_executable)
binary.optional_header.subsystem = lief.PE.SUBSYSTEM.WINDOWS_GUI
binary.write('node.exe')

print('Building exe with caxa...')
o = subprocess.Popen(['cmd', '/c', r'node.exe build.js'])
o.wait()

print('Modifying generated executable subsystem...')
generated_executable = os.getcwd()+"\\"+os.getenv('EXE_NAME')+".exe"
binary = lief.parse(generated_executable)
binary.optional_header.subsystem = lief.PE.SUBSYSTEM.WINDOWS_GUI
binary.write(os.getenv('EXE_NAME')+".exe")

print('Deleting node.exe...')
delete_local_node()