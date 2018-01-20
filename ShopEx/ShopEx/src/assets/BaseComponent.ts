import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { WorkSpaceManagerService } from '../app/work-space-manager.service';
import { ShoppingCartService } from '../app/shopping-cart.service';


export class BaseComponent {
    constructor(private WorkSpaceManager: WorkSpaceManagerService, private cartService: ShoppingCartService) {}
}