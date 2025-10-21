/*
Copyright 2025 Alex "Lexden" Schendel

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

const express = require('express');
const app = express();
const path = require('path');
const { spawn } = require('node:child_process');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/projects/:projectName', (req, res) => {
  const projectName = req.params.projectName;
  res.render(`projects/${projectName}`, { projectName: projectName });
});

app.get('/about', (req, res) => {
  res.render('about');
});

const port = 3999;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
