import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-compressor',
  templateUrl: './compressor.component.html',
  styleUrls: ['./compressor.component.css']
})
export class CompressorComponent implements OnInit {
  public title = 'Compressor page';
  private _compressorGroup: FormGroup;
  private _compressed: string;
  private _decompressed: string;

  constructor(
    private _fb: FormBuilder
  ) { }

  createFormGroup() {
    return this._fb.group({
      _input: ['', ],
      _decompressed: ['', ],
    });
  }

  ngOnInit() {
    this._compressorGroup = this.createFormGroup();
    this._compressed = '';
    this._decompressed = '';
  }

  getCompressed () {
    const string = this._compressorGroup.get('_input').value;
    let count = 1;
    let newStr = '';
    for (let i = 0; i <  string.length; i++) {
      if (string[i] === string[i + 1]) {
        count++;
      } else {
        if (count === 1) {
          newStr += string[i];
        } else {
          newStr += string[i] + count;
        }
        count = 1;
      }
    }
    this._compressed = newStr;
  }

  getDeCompressed() {
    let string = this._compressorGroup.get('_decompressed').value;
    let newStr = '';
    for (let i = 0; i < string.length; i++) {
      newStr =  string[0].repeat(string[1] || 1);
        string = string.substr(2);
    }

    this._compressorGroup.get('_input').setValue(newStr);
  }
}
