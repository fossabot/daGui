import SparkAdapter from '../../../app/adapters/spark';
import Python from '../../../app/core/languages/Python';

export default {
  name: 'Simple.py',
  path: '/home/adam/thesis/Simple.py',
  lastHistorySaved: 0,
  adapter: SparkAdapter,
  language: Python,
  adapterVersion: '2.1',
  languageVersion: '2.7',
  $selected: [],
  $pan: {
    x: 0,
    y: 0
  },
  zoom: 1,
  "history": {
    past: [],
    present: {
      historyId: 0,
      $occupiedPorts: {},
      "usedVariables": {
        "input": "c9615ee0-89ee-4b31-8168-fa374461d542"
      },
      "cells": [
        {
          "size": {
            "width": 60,
            "height": 30
          },
          "attrs": {},
          "position": {
            "x": 190.5,
            "y": 132
          },
          "dfGui": {
            "description": "Parallelize",
            "variableName": "input",
            "parameters": [
              "['a', 'b']"
            ]
          },
          "z": 1,
          "type": "spark.parallelize",
          "id": "c9615ee0-89ee-4b31-8168-fa374461d542"
        },
        {
          "size": {
            "width": 60,
            "height": 30
          },
          "attrs": {},
          "position": {
            "x": 412,
            "y": 132
          },
          "dfGui": {
            "description": "Count",
            "variableName": null,
            "parameters": []
          },
          "z": 1,
          "type": "spark.count",
          "id": "b550c243-edb1-4af0-bd20-bb090caabbea"
        },
        {
          "type": "link",
          "source": {
            "id": "c9615ee0-89ee-4b31-8168-fa374461d542",
            "selector": "g:nth-child(1) > g:nth-child(4) > circle:nth-child(1)",
            "port": "out"
          },
          "target": {
            "id": "b550c243-edb1-4af0-bd20-bb090caabbea",
            "selector": "g:nth-child(1) > g:nth-child(4) > circle:nth-child(1)",
            "port": "in"
          },
          "smooth": true,
          "id": "ca38e690-737d-42fc-8359-94d48058efd5",
          "z": 2,
          "attrs": {
            ".marker-target": {
              "d": "M 10 0 L 0 5 L 10 10 z"
            }
          }
        }
      ]
    },
    future: []
  }
}
